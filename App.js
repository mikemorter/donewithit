import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, AppText, Switch } from "react-native";
import ListItem from "./app/components/ListItem";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import { TextInput } from "react-native-gesture-handler";
import AppTextInputs from "./app/components/AppTextInputs";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState(categories[0]);
  return <RegisterScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
