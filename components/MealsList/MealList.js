import React from "react";
import { MealItem } from "./MealItem";
import { FlatList, StyleSheet, View } from "react-native";

export const MealList = ({ items }) => {
  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      complexity: item.complexity,
      duration: item.duration,
      affordability: item.affordability,
    };
    return <MealItem {...mealProps} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
