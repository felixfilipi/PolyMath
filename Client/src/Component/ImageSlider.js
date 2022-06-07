import { ScrollView, View, useWindowDimensions } from "react-native";
import { Card, Title } from "react-native-paper";
import style from "../Styles/homeStyle";

function ImageSlider(props) {
  const { width: windowWidth } = useWindowDimensions();
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={style.scrollContainer}
      endFillColor="#000"
      overScrollMode="auto"
    >
      {props.data.map((content, contentIndex) => {
        console.log("test = " + content);
        let cardTitle = content.CATEGORY;
        let cardCover = content.LINK;
        let cardColor = content.THEME_COLOR;
        return (
          <View
            style={{
              width: windowWidth - 150,
              marginHorizontal: 6,
            }}
            key={contentIndex}
          >
            <Card>
              <Card.Cover source={{ uri: cardCover }} style={style.CardCover} />
              <Card.Content
                style={[style.CardBg, { backgroundColor: cardColor }]}
              >
                <Title style={style.CardTitle}>{cardTitle}</Title>
              </Card.Content>
            </Card>
          </View>
        );
      })}
    </ScrollView>
  );
}

export default ImageSlider;
