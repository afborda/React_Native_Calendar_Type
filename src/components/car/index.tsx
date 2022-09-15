import React from "react";
import { View } from "react-native";

import Gasoline from "../../assets/gasoline.svg";

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

interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

interface Props {
  data: CarData;
}

const CardCar = ({ data }: Props) => {
  return (
    <Container>
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
