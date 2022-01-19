import { View } from "react-native";
import styled from "styled-components";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3
}

const positionVariant = {
  top: 'marginTop',
  left: 'marginLeft',
  right: 'marginRight',
  bottom: 'marginBottom',
}

const getVariant = (placePosition, size, theme) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[placePosition];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`
}

export const Spacer = styled(View)`
${({placePosition, size, theme}) => getVariant(placePosition, size, theme)}
`

Spacer.defaultProps = {
  placePosition: "top",
  size: "small",
}