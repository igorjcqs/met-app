import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Details from "../pages/Details";
import Galery from "../pages/Galery";

const Stack = createStackNavigator();

export const AppRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Galery" component={Galery} />
    <Stack.Screen name="Details" component={Details} />
  </Stack.Navigator>
);
