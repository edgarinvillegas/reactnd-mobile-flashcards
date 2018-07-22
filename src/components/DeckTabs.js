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
        screen: () => <View style={styles.container}><Text>New Deck</Text></View>,
        navigationOptions: {
            tabBarLabel: 'NEW DECK'
        }
    }
});

export default Tabs;

class DeckTabs extends React.Component {
    render() {
        return (
            <View style={styles.container}><Text>Deck list 3</Text></View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});