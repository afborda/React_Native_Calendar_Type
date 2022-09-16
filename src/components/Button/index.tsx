import React from "react";
import { View } from "react-native";

import { useTheme } from "styled-components";

import { Container, Title } from "./styles";

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
}

const Button = ({ title, color, ...rest }: Props) => {
  const theme = useTheme();
  return (
    <Container {...rest} color={color ? color : theme.color.main}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
