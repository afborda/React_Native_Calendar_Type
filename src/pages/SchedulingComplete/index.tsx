import React from "react";
import { View, useWindowDimensions, StatusBar } from "react-native";
import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { Container, Content, Title, Message, Footer } from "./styles";
import ConfirmButton from "../../components/ConfirmButton";
import { useNavigation } from "@react-navigation/native";

const SchedulingComplete = () => {
  const { width } = useWindowDimensions();

  const navigation = useNavigation<any>();

  function handleSchedulingFinish() {
    navigation.navigate("Home");
  }
  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />
        <Title>Carro Alugado!</Title>
        <Message>
          Agora você só precisa ir {"\n"}
          até a concesionario da RENTX {"\n"}
          pegar o seu automóvel
        </Message>

        <Footer>
          <ConfirmButton title="OK" onPress={handleSchedulingFinish} />
        </Footer>
      </Content>
    </Container>
  );
};

export default SchedulingComplete;
