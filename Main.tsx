import React from "react";
import { View } from "react-native";
import { AppRegistry } from "react-native";

import App from "./src/App";

// import { Container } from './styles';

export default function Main() {
  return <App />;
}

AppRegistry.registerComponent("main", () => Main);
