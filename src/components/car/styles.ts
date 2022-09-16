import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  margin-bottom: 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.background_secondary};
`;

export const Details = styled.View``;
export const Brand = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.color.title};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;
export const NameCar = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.color.title};
  font-size: ${RFValue(15)}px;
  text-transform: uppercase;
`;
export const About = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
`;
export const Rend = styled.View`
  margin-right: 24px;
`;

export const Period = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.color.text_detail};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;
export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_500};
  color: ${({ theme }) => theme.color.main};
  font-size: ${RFValue(15)}px;
  text-transform: uppercase;
`;
export const Type = styled.View``;
export const CarImage = styled.Image`
  width: 167px;
  height: 85px;
`;
