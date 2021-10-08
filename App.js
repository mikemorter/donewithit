import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, AppText } from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import AppButton from "./app/components/AppButton";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppiText from "./app/components/AppStyles/AppText";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppButton title="Login" onPress={() => console.log("button pressed")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
