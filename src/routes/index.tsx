import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { StackRoute } from "./stack.routes";

const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoute />
    </NavigationContainer>
  );
};

export default Routes;
