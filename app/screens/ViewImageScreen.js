import React from "react";
import { Image, View, StyleSheet } from "react-native";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View styles={styles.container}>
      <View styles={styles.closeIcon}></View>
      <View styles={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/Images/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});

export default ViewImageScreen;
