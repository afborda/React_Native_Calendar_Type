import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Container, Header, TotalCars, HeaderContent, CarList } from "./styles";
import Logo from "../../assets/logo.svg";
import CardCar from "../../components/car";
import { useNavigation } from "@react-navigation/native";
import { GetListCars } from "../../service/GetCars";
import { CarDTO } from "../../dtos/CarDTO";
import Loading from "../../components/Loading";

const Home = () => {
  const [car, setCar] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<any>();

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

  function handleCarDetails() {
    navigation.navigate("CarDetails");
  }

  useEffect(() => {
    async function fetchCars() {
      setLoading(true);
      const response = await GetListCars();
      setCar(response.data);
      console.log(response.data);
      setLoading(false);
    }
    fetchCars();
  }, []);

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

      {loading ? (
        <Loading />
      ) : (
        <CarList
          data={car}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardCar data={item} onPress={handleCarDetails} />
          )}
        />
      )}
    </Container>
  );
};

export default Home;
