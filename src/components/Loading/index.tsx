import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";

const Loading = () => {
  const theme = useTheme();
  return (
    <ActivityIndicator
      color={theme.color.main}
      size="large"
      style={{ flex: 1 }}
    />
  );
};

export default Loading;
