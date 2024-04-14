import { useRoute } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { MealItem } from "../components/MealsList/MealItem";
import { MealList } from "../components/MealsList/MealList";

export const MealsOverview = ({ route, navigation }) => {
  // const route = useRoute();
  // route.params;
  const catId = route.params.categoryId;

  //get all the meals that belong to this category
  const displayMEals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealList items={displayMEals} />;
};
