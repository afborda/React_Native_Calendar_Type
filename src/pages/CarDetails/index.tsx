import React from "react";
import { View } from "react-native";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";

import SpeedSVG from "../../assets/speed.svg";
import AccelerationSVG from "../../assets/acceleration.svg";
import ForceSVG from "../../assets/force.svg";
import GasolineSVG from "../../assets/gasoline.svg";
import ExchangeSVG from "../../assets/exchange.svg";
import PeopleSVG from "../../assets/people.svg";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rend,
  Period,
  Price,
  About,
  Acessories,
  Footer,
} from "./styled";
import Accessory from "../../components/Accessory";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

const CardDetails = () => {
  const navigation = useNavigation<any>();

  function handleSchedulingClick() {
    navigation.navigate("Scheduling");
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
          ]}
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborghini</Brand>
            <Name>Huracan</Name>
          </Description>
          <Rend>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rend>
        </Details>

        <Acessories>
          <Accessory name="380Km/h" icon={SpeedSVG} />
          <Accessory name="3.2" icon={AccelerationSVG} />
          <Accessory name="800 HP" icon={ForceSVG} />
          <Accessory name="Gasolina" icon={GasolineSVG} />
          <Accessory name="Auto" icon={ExchangeSVG} />
          <Accessory name="2 pessoas" icon={PeopleSVG} />
        </Acessories>

        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure
          libero corporis expedita reiciendis. Enim temporibus nulla doloribus
          maiores odit ad ut quo culpa architecto ratione. Sed voluptates earum
          corrupti!
        </About>
      </Content>
      <Footer>
        <Button
          title="Escolher periodo do aluguel"
          onPress={handleSchedulingClick}
        />
      </Footer>
    </Container>
  );
};

export default CardDetails;
