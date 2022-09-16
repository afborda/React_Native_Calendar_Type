import React from "react";
import { View } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

import Gasoline from "../../assets/gasoline.svg";
import { CarDTO } from "../../dtos/CarDTO";

import {
  Container,
  Details,
  Brand,
  NameCar,
  About,
  Rend,
  Period,
  Price,
  Type,
  CarImage,
} from "./styles";

interface Props extends RectButtonProps {
  data: CarDTO;
}

const CardCar = ({ data, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <NameCar>{data.name}</NameCar>
        <About>
          <Rend>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rend>
          <Type>
            <Gasoline />
          </Type>
        </About>
      </Details>
      <CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode="cover"
      />
    </Container>
  );
};

export default CardCar;
