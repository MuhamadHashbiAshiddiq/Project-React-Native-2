import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import {
  StatusBar,
  SafeAreaView,
  View,
  FlatList,
} from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
