import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../utils/colors";

export const CategoryGridTile = ({ title, color, onPress }) => {
  return (
    <>
      <StatusBar />
      <View style={style.gridItem}>
        <Pressable
          style={({ pressed }) => [
            style.button,
            pressed ? style.buttonPressed : null,
          ]}
          android_ripple={{ color: "grey" }}
          onPress={onPress}
        >
          <View style={[style.innerContainer, { backgroundColor: color }]}>
            <Text style={style.title}>{title}</Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    backgroundColor: "white",
    elevation: 4,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: colors.textSecondary,
  },
});
