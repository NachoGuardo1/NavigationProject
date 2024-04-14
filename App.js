import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MealsOverview } from "./screens/MealsOverview";
import { MealDetailsScreen } from "./screens/MealDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { FavoriteScreen } from "./screens/FavoriteScreen";
import FavoriteContextProvider from "./store/context/favorite-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
import { colors } from "./utils/colors";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

// const navigation = useNavigation();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerTintColor: colors.textPrimary,
        sceneContainerStyle: { backgroundColor: colors.primary },
        drawerContentStyle: { backgroundColor: colors.terciary },
        drawerInactiveTintColor: colors.textSecondary,
        drawerActiveTintColor: colors.textPrimaryLigth,
        drawerActiveBackgroundColor: "black",
      }}
    >
      <Drawer.Screen
        name="All Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar style="light" />
        {/* <FavoriteContextProvider> */}
        <NavigationContainer>
          {/* <BottomTab.Navigator
          screenOptions={{
            drawerActiveBackgroundColor: "white",
            drawerActiveTintColor: "purple",
            drawerStyle: { backgroundColor: "#ccc" },
            headerStyle: { backgroundColor: "purple" },
            headerTintColor: "white",
            tabBarActiveTintColor: "purple",
          }}
        >
          <BottomTab.Screen
            name="Categories"
            component={CategoriesScreen}
            //OPTIONS P/ DRAWER
            // options={{
            //   drawerIcon: ({ color, size }) => (
            //     <Ionicons name="home" color={color} size={size} />
            //   ),
            //   drawerLabel: "All Categories",
            // }}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Meals"
            component={MealDetailsScreen}
            //OPTIONS P/ DRAWER
            // options={{
            //   drawerIcon: ({ color, size }) => (
            //     <Ionicons name="person" color={color} size={size} />
            //   ),
            // }}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
            }}
          />
        </BottomTab.Navigator> */}
          <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
              headerStyle: {
                backgroundColor: colors.secondary,
              },
              headerTintColor: colors.textPrimary,
              contentStyle: { backgroundColor: colors.primary },
            }}
          >
            <Stack.Screen
              name="Categories"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Meals" component={MealsOverview} />
            <Stack.Screen name="Meal Detail" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* </FavoriteContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
