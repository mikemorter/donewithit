import React from "react";
import { View, StyleSheet, Image } from "react-native";
import AppiText from "./AppStyles/AppText";

import colors from "../config/colors";

function ListItem({ title, subTitle, image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <AppiText style={styles.title}>{title}</AppiText>
        <AppiText style={styles.subTitle}>{subTitle}</AppiText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
