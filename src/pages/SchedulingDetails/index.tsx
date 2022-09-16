import React from "react";
import { View } from "react-native";
import BackButton from "../../components/BackButton";
import ImageSlider from "../../components/ImageSlider";

import { Feather } from "@expo/vector-icons";

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
  Acessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from "./styled";
import Accessory from "../../components/Accessory";
import Button from "../../components/Button";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../styles/theme";

const SchedulingDetails = () => {
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

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.color.shape}
            />
          </CalendarIcon>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.color.text}
          />
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button title="Confirmar" onPress={() => {}} />
      </Footer>
    </Container>
  );
};

export default SchedulingDetails;
