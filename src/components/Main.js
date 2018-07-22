import React from 'react';
import { inject, observer } from 'mobx-react';
import {Button, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

const MainStack = createStackNavigator({
    DeckList: {
        screen: () => <View style={styles.container}><Text>Deck list 2</Text></View>
    },
    Deck: {
        screen: () => <View style={styles.container}><Text>Single deck 2</Text></View>
    }
});

MainStack;

@inject('deckStore')
@observer
export default class Main extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Main!!</Text>
                <Text>{JSON.stringify(Object.keys(this.props.deckStore.getDecks()))}</Text>
                <Button
                    title={'Modify state'}
                    onPress={() => {
                        this.props.deckStore.addDeck$('yeah2');
                        console.log('Deck added 2');
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
