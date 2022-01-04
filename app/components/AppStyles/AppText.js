import React from "react";
import { Text } from "react-native";
import defaultStyles from "..//..//config/styles";

function AppiText({ children, style, ...otherProps }) {
  return (
    <Text style={[defaultStyles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
}

export default AppiText;
