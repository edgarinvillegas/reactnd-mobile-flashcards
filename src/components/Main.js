import React from 'react';
import { createStackNavigator } from 'react-navigation';

import DeckTabs from "./DeckTabs";

const MainStack = createStackNavigator({
    DeckTabs: {
        screen: DeckTabs
    },
    Deck: {
        screen: () => <View flex={1}><Text>Single deck 2</Text></View>
    }
}, {
    navigationOptions: {
        header: null
    }
});

export default MainStack;


