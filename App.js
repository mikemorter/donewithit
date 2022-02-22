import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect} from "react";
import { StyleSheet, Text, View, AppText, Switch, Button, Image } from "react-native";
import ListItem from "./app/components/ListItem";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

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
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessagesScreen"
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  return <ListingEditScreen />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
