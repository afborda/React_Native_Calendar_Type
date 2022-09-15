import React from "react";
import { View, Text } from "react-native";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import Logo from "../../assets/logo.svg";
import CardCar from "../../components/car";

const Home = () => {
  const carData = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "AO DIA",
      price: 120,
    },
    thumbnail: "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
  };

  const carDataTwo = {
    brand: "Porsche",
    name: "Panamera",
    rent: {
      period: "AO DIA",
      price: 340,
    },
    thumbnail:
      "https://pensecarros.com.br/cms/uploads/porsche-panamera-2-9-v6-e-hybrid-4s-pdk-60f0ebf82bffc.png",
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 Carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <CardCar data={carData} />}
      />
    </Container>
  );
};

export default Home;
