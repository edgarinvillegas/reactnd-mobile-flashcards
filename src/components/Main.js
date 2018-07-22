import React from 'react';
import {Text, View} from "react-native";
import { createStackNavigator } from 'react-navigation';

import DeckTabs from "./DeckTabs";
import Deck from "./Deck";
import Quiz from "./Quiz";

const MainStack = createStackNavigator({
    DeckTabs: {
        screen: DeckTabs,
        navigationOptions: {
            headerStyle: {
                height: 0,
                backgroundColor: 'rgba(29,139,241,1)'
            }
        }
    },
    Deck: {
        screen: Deck,
        navigationOptions: {
            headerStyle: {
                // height: 30,
                backgroundColor: 'rgba(29,139,241,1)'
            },
            headerTintColor: 'white'
        }
    },
    Quiz: {
        screen: Quiz,
        navigationOptions: {
            headerStyle: {
                // height: 30,
                backgroundColor: 'rgba(29,139,241,1)'
            },
            headerTintColor: 'white'
        }
    }
}, {

});

export default MainStack;


