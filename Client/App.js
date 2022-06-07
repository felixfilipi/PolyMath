import { StatusBar } from "expo-status-bar";
import { ScrollView, View } from "react-native";
import Home from "./src/Pages/Home.js";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#2b2b2b",
      }}
    >
      <ScrollView>
        <Home />
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
