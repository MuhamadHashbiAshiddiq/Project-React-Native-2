import React from "react";
import { View, Text } from "react-native";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name= "Some Restaurants",
    icon,
    photos,
    address,
    openingHours,
    rating,
    isClosedTemporarily,
  } = restaurant;
  return <Text>{name}</Text>;
};
