import React from 'react';
import { Platform, StyleSheet, Text, View} from "react-native";
import {createBottomTabNavigator, createMaterialTopTabNavigator} from "react-navigation";
import DeckList from "./DeckList";

const tabNavigatorFactory = Platform.OS == 'ios2' ? createBottomTabNavigator : createMaterialTopTabNavigator;
const Tabs = tabNavigatorFactory({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'DECKS'
        }
    },
    NewDeck: {
        screen: () => <View><Text>New Deck</Text></View>,
        navigationOptions: {
            tabBarLabel: 'NEW DECK'
        }
    }
});

export default Tabs;