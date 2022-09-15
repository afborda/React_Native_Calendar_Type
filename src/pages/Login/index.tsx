import React, { useRef } from "react";
import { View } from "react-native";
import { Text, Div, Button, Icon, Input } from "react-native-magnus";
import LottieView from "lottie-react-native";
import { Container } from "./styles";

const Login = () => {
  const animation = useRef(null);

  return (
    <Container>
      <LottieView
        ref={animation}
        autoPlay
        loop={false}
        style={{
          width: 200,
          height: 200,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require("../../assets/imagens_json/church.json")}
      />
      <Div>
        <Input
          placeholder="Username"
          p={10}
          focusBorderColor="blue700"
          suffix={<Icon name="user" color="gray900" fontFamily="Feather" />}
        />
        <Input
          placeholder="Password"
          mt="md"
          p={10}
          secureTextEntry
          focusBorderColor="blue700"
        />

        <Button
          w={300}
          mt="lg"
          px="xl"
          py="lg"
          bg="blue600"
          color="white"
          mb={10}
          suffix={<Icon name="arrowright" ml="md" color="white" />}
        >
          Entrar
        </Button>
        <Div row justifyContent="flex-end" mb={20}>
          <Button mt="lg" px="xl" py="lg" bg="transparent" color="white">
            Lembrar senha
          </Button>
        </Div>
        <Div row justifyContent="center">
          <Button mr={10} bg="blue500" h={55} w={55} rounded="circle">
            <Icon name="google" color="white" fontSize="4xl" />
          </Button>
        </Div>
      </Div>
    </Container>
  );
};

export default Login;
