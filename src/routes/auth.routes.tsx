import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Signin from "../pages/Signin";

const Stack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Signin" component={Signin} />
  </Stack.Navigator>
);

export default AuthRoutes;
