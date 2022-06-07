import { Image, View, Text, StatusBar, Appearance } from "react-native";
import React from "react";
import style from "../Styles/homeStyle";
import ImageSlider from "../Component/ImageSlider";
import { Card, Title, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { Separator } from "../Component/myComponent";

function Home() {
  const colorScheme = Appearance.getColorScheme();
  const [data, setData] = React.useState([]);
  const [history, setHistory] = React.useState(1);

  const getData = async () => {
    try {
      const response = await fetch("http://192.168.18.150:8000/home/");
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.log(error);
    }
  };

  const getHistory = async () => {
    try {
      const response = await fetch("http://192.168.18.150:8000/history/");
      const json = await response.json();
      setHistory(json);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getData();
    getHistory();
  }, []);

  return (
    <View>
      <StatusBar
        backgroundColor={"black"}
        barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
      />
      <Image
        source={require("../../assets/images/polymath-icon.png")}
        style={style.logo}
      />
      <Separator />
      <Text style={style.SearchHeader}>Search</Text>
      <View>
        <TextInput
          style={style.search}
          placeholder="Category, formula, or measures"
          left={
            <TextInput.Icon name={() => <Icon name={"search"} size={20} />} />
          }
          selectionColor={"#1f1f1f"}
          activeUnderlineColor={"transparent"}
          underlineColor={"transparent"}
        />
      </View>
      <View style={{ marginTop: 30 }}>
        <Separator />
      </View>

      <Text style={style.SectionHeader}>Your history</Text>

      <ImageSlider data={history} />

      <Text style={[style.SectionHeader, { marginTop: 20, marginBottom: 20 }]}>
        Other Categories
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          marginHorizontal: 15,
        }}
      >
        {data.map((content, contentIndex) => {
          let cardTitle = content.CATEGORY;
          let cardCover = content.LINK;
          let cardColor = content.THEME_COLOR;
          return (
            <Card
              style={{
                flexBasis: "47%",
                marginHorizontal: 5,
                marginBottom: 10,
              }}
              key={contentIndex}
            >
              <Card.Cover source={{ uri: cardCover }} style={style.CardCover} />
              <Card.Content
                style={[style.CardBg, { backgroundColor: cardColor }]}
              >
                <Title style={style.CardTitle}>{cardTitle}</Title>
              </Card.Content>
            </Card>
          );
        })}
      </View>
    </View>
  );
}

export default Home;
