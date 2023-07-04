import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createNativeStackNavigator();

import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Home from "../screens/Home";
import Events from "../screens/Events";
import EventInformation from "../screens/EventInformation";
import HomeInformation from "../screens/HomeInformation";
import Loading from "../screens/Loading";
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";
import Settings from "../screens/Settings";

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="loading" component={Loading} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="cadastro" component={Cadastro} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="events" component={Events} />
        <Stack.Screen name="eventInformation" component={EventInformation} />
        <Stack.Screen name="homeInformation" component={HomeInformation} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="editProfile" component={EditProfile} />
        <Stack.Screen name="settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
