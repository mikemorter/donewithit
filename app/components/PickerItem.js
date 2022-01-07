import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppiText from "./AppStyles/AppText";

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppiText style={styles.text}>{item.label}</AppiText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;
