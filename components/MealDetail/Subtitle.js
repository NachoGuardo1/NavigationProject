import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils/colors";

export const Subtitle = ({ children }) => {
  return (
    <View style={style.subtitleContainer}>
      <Text style={style.subtitle}>{children}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  subtitle: {
    textAlign: "center",
    color: colors.textSecondary,
    fontSize: 18,
    fontWeight: "bold",
  },
  subtitleContainer: {
    borderBottomColor: colors.textSecondary,
    borderBottomWidth: 2,
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
  },
});
