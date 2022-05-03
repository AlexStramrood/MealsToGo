import { Card } from "react-native-paper";
import styled from "styled-components/native";

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body}
  font-size: ${(props) => props.theme.fontSizes.caption}
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
export const Rating = styled.View`
  flex-direction: row;
`;
export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
