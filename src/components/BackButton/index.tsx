import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { BorderlessButtonProps } from "react-native-gesture-handler";

import { Container } from "./styles";

interface Props extends BorderlessButtonProps {
  color?: string;
}

const BackButton = ({ color, ...rest }: Props) => {
  const theme = useTheme();
  return (
    <Container {...rest}>
      <MaterialCommunityIcons
        name="chevron-left"
        size={24}
        color={color ? color : theme.color.text}
      />
    </Container>
  );
};

export default BackButton;
