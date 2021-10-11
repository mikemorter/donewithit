import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, AppText } from "react-native";
import ListItem from "./app/components/ListItem";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <ListItem title="My title" ImageComponent={<Icon name="email" />} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
