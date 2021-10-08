import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto",
      },
    }),
  },
});

export default styles;
