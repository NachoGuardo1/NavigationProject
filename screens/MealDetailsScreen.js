import React, { useContext, useLayoutEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { MealDetails } from "../components/MealDetails";
import { Subtitle } from "../components/MealDetail/Subtitle";
import { List } from "../components/MealDetail/List";
import { IconButton } from "../components/IconButton";
import { FavoriteContext } from "../store/context/favorite-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
import { colors } from "../utils/colors";

export const MealDetailsScreen = ({ route, navigation }) => {
  // const favoritMealsCtx = useContext(FavoriteContext);
  const favoriteMeals = useSelector((state) => state.favoriteMeals.ids);
  console.log(favoriteMeals);

  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMeals.includes(mealId);

  const changeFavoriteHandler = () => {
    console.log("press");
    if (mealIsFavorite) {
      // favoritMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoritMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteHandler}
            icon={mealIsFavorite ? "star" : "star-outline"}
            color={colors.textPrimary}
          />
        );
      },
    });
  }, [navigation, changeFavoriteHandler]);

  return (
    <ScrollView style={style.root}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={style.image} />
      <Text style={style.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={style.detailText}
      />
      <View style={style.listOuterContainer}>
        <View style={style.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: colors.textPrimary,
  },
  detailText: {
    color: colors.textSecondary,
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
