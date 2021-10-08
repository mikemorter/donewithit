import React from "react";
import { Text, StyleSheet } from "react-native";

function AppiText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: "tomato",
    fontSize: 18,
    fontFamily: "Roboto",
  },
});

export default AppiText;
