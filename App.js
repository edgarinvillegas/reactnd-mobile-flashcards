import React from 'react';
import {StatusBar, View} from "react-native";
import { Provider } from 'mobx-react';

import sampleData from './src/data/sampleData';
import DecksStore from "./src/data/DecksStore";
import Main from "./src/components/Main";

const deckStore = new DecksStore(sampleData);
setTimeout(() => {
    deckStore.addDeck$('yeah');
    console.log('Deck added');
}, 5000);

const TopBar = () => {
    const backgroundColor = 'black';
    return (
        <View style={{backgroundColor, height: 30 }}>
            <StatusBar transluscent backgroundColor={backgroundColor} barStyle="light-content"/>
        </View>
    )
    
}

export default class App extends React.Component {
  render() {
    return (
      <Provider deckStore={deckStore}>
          <View flex={1}>
              <TopBar />
              <Main />
          </View>
      </Provider>
    );
  }
}

