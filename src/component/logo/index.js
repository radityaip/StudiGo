import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";

export default ({ logoStyle, logoTextStyle }) => (
  <View style={[styles.logo, logoStyle]}>
    <Image source={require("./Study.png")} style={{ width: 120, height: 90 }} />
  </View>
);
