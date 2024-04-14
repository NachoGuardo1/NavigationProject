import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils/colors";

export const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View key={dataPoint} style={styles.listItem}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: colors.terciary,
  },
  itemText: {
    color: colors.textSecondary,
    textAlign: "center",
  },
});
