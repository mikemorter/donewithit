import React from "react";
import { StyleSheet } from "react-native";

import AppiText from "../AppStyles/AppText";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null;
  return <AppiText style={styles.error}>{error}</AppiText>;
}

const styles = StyleSheet.create({
  error: {
    color: "red",
  },
});

export default ErrorMessage;
