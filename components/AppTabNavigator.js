import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import AddRecommendations from '../screens/AddRecommendations';


export const AppTabNavigator = createBottomTabNavigator({
  Suggestions: {
    screen: AppStackNavigator,
    navigationOptions: {
      tabBarIcon: <Image source={require("../assets/suggestions.png")} style={{ width: 20, height: 20 }} />,
      tabBarLabel: "Search Suggestions",
    }
  },
  Recommendations: {
    screen: AddRecommendations,
    navigationOptions: {
      tabBarIcon: <Image source={require("../assets/recommendations.png")} style={{ width: 20, height: 20 }} />,
      tabBarLabel: "Add Recommendations",
    }
  }
});
