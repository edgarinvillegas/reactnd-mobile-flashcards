import React from 'react';
import { StatusBar, View, AsyncStorage } from "react-native";
import { Provider } from 'mobx-react';

import DecksStore from "./src/data/DecksStore";
import Main from "./src/components/Main";
import { scheduleQuizNotification } from "./src/helpers/notifications";

const deckStore = new DecksStore();
const TopBar = () => {
    const backgroundColor = 'black';
    return (
        <View style={{backgroundColor, height: 30 }}>
            <StatusBar transluscent backgroundColor={backgroundColor} barStyle="light-content"/>
        </View>
    )
}

export default class App extends React.Component {
  async componentDidMount() {
      scheduleQuizNotification();
      await deckStore.load$();
      console.log('MOBILE_FLASHCARDS:data', await AsyncStorage.getItem('MOBILE_FLASHCARDS:data'));
  }
  render() {
    return (
      <Provider deckStore={deckStore}>
          <View flex={1}>
              {/*<TopBar />*/}
              <Main />
          </View>
      </Provider>
    );
  }
}

