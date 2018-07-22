import React, { Component } from 'react';

import {inject, observer} from 'mobx-react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Button from "./common/Button";

const DeckCard = ({ deck, onDeckPress }) => {
    const styles = StyleSheet.create({
        container: {
            height: 150,
            borderBottomWidth: 2,
            borderBottomColor: 'black',
            borderStyle: 'solid'
        },
        title: {
            fontSize: 25
        },
        subtitle: {
            color: '#666666'
        }
    });
    
    return (
        <TouchableOpacity onPress={onDeckPress}>
            <View alignItems="center" justifyContent="center" style={styles.container}>
                <Text style={styles.title}>
                    {deck.title}
                </Text>
                <Text style={styles.subtitle}>
                    {deck.questions.length} cards
                </Text>
            </View>
        </TouchableOpacity>
    );
}


@inject('deckStore')
@observer
export default class DeckList extends Component {
    render() {
        const { deckStore } = this.props;
        return (
            <View flex="1" styles={styles.container}>
                <FlatList
                    data={Object.values(deckStore.getDecks())}
                    renderItem={({ item: deck }) => (
                        <DeckCard
                            deck={deck}
                            onDeckPress={() => this.openDeck(deck)}
                        />
                    ) }
                />
            </View>
        );
    }
    
    openDeck = (deck) => {
        this.props.navigation.navigate('Deck', {deck} )
    }
}

const styles = StyleSheet.create({
    container: {
    },
});