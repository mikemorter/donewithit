import React from "react";
import { Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";

import AppiText from "./AppStyles/AppText";
import colors from "../config/colors";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Text style={style.loginText}>{title}</Text>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 25,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
