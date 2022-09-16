import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import CarDetails from "../pages/CarDetails";
import Scheduling from "../pages/Scheduling";
import SchedulingComplete from "../pages/SchedulingComplete";
import SchedulingDetails from "../pages/SchedulingDetails";
import Login from "../pages/Login";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoute() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="Login" component={Login} />
    </Navigator>
  );
}
