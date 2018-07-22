import React from 'react';
import { Provider } from 'mobx-react';

import sampleData from './src/data/sampleData';
import DecksStore from "./src/data/DecksStore";
import Main from "./src/components/Main";

const deckStore = new DecksStore(sampleData);
setTimeout(() => {
    deckStore.addDeck$('yeah');
    console.log('Deck added');
}, 5000);

export default class App extends React.Component {
  render() {
    return (
      <Provider deckStore={deckStore}>
          <Main/>
      </Provider>
    );
  }
}

