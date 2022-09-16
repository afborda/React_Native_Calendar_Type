import { RFValue } from "react-native-responsive-fontsize";
import { FlatList, FlatListProps } from "react-native";
import styled from "styled-components/native";
import { CarDTO } from "../../dtos/CarDTO";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.shape};
`;

export const Header = styled.View`
  width: 100%;
  height: 113px;
  background-color: ${({ theme }) => theme.color.header};
  padding: 40px 24px;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalCars = styled.Text`
  color: ${({ theme }) => theme.color.text};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.primary_400};
`;

export const CarList = styled(
  FlatList as new (props: FlatListProps<CarDTO>) => FlatList<CarDTO>
).attrs({
  contentContainerStyle: {
    padding: 24,
  },
  showsVerticalScrollIndicator: false,
})``;
