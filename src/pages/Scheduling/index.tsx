import React from "react";
import { StatusBar, View } from "react-native";
import { useTheme } from "styled-components";

import BackButton from "../../components/BackButton";
import ArrowSvg from "../../assets/arrow.svg";
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  DateValueContainer,
  Content,
  Footer,
} from "./styles";
import Button from "../../components/Button";
import Calendar from "../../components/Calendar";
import { useNavigation } from "@react-navigation/native";

const Scheduling = () => {
  const theme = useTheme();
  const navigation = useNavigation<any>();

  function handleSchedulingDetailsClick() {
    navigation.navigate("SchedulingDetails");
  }

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <Header>
        <BackButton onPress={() => {}} color={theme.color.shape} />
        <Title>
          Escolha uma {"\n"}data de inicio e {"\n"} fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValueContainer selected={false}>
              <DateValue></DateValue>
            </DateValueContainer>
          </DateInfo>
          <ArrowSvg />
          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValueContainer selected={false}>
              <DateValue></DateValue>
            </DateValueContainer>
          </DateInfo>
        </RentalPeriod>
      </Header>
      <Content>
        <Calendar />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleSchedulingDetailsClick} />
      </Footer>
    </Container>
  );
};

export default Scheduling;
