"use strict";
import React from "react-native";

export default React.StyleSheet.create({
  logo: {
    width: 150,
    height: 100,
    resizeMode: "contain",
    marginTop: 30,
    marginLeft: 10,
  },

  SearchHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fdfeff",
    textAlign: "center",
    marginBottom: 5,
    marginTop: 20,
    fontWeight: "bold",
  },

  search: {
    height: 40,
    backgroundColor: "#fff",
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    color: "#000",
    fontSize: 15,
    fontWeight: "bold",
  },

  SectionHeader: {
    color: "#fdfeff",
    marginLeft: 25,
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },

  scrollContainer: {
    marginTop: 20,
    marginHorizontal: 10,
    color: "#fff",
  },

  CardCover: {
    height: 150,
  },

  CardBg: {
    borderRadius: 3,
    borderTopEndRadius: 0,
    borderTopStartRadius: 0,
    opacity: 0.9,
  },

  CardTitle: {
    color: "#fdfeff",
    marginTop: 5,
    fontSize: 16,
  },
});
