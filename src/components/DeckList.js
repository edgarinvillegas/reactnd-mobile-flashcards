import React, { Component } from 'react';

import {inject, observer} from 'mobx-react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Button from "./common/Button";

const DeckCard = observer(({ deck, onDeckPress }) => {
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
                    {deck.questions.length} {deck.questions.length === 1 ? 'card' : 'cards'}
                </Text>
            </View>
        </TouchableOpacity>
    );
});

const NoDecks = ({ onAddDeckPress }) => (
    <View flex="1" alignItems={'center'} justifyContent={'center'}>
        <Text style={{ fontSize: 30, margin: 20 }}>
            You don't have decks yet!
        </Text>
        <Button type="WHITE" title="Add Deck" onPress={onAddDeckPress} />
    </View>
);


@inject('deckStore')
@observer
export default class DeckList extends Component {
    render() {
        const { deckStore } = this.props;
        return (
            <View style={styles.container}>
                {Object.keys(deckStore.getDecks()).length === 0 ? (
                    <NoDecks onAddDeckPress={() => this.props.navigation.navigate('NewDeck')} />
                    ) : (
                    <FlatList
                        data={Object.values(deckStore.getDecks())}
                        keyExtractor={(deck) => deck.title }
                        renderItem={({ item: deck }) => (
                            <DeckCard
                                deck={deck}
                                onDeckPress={() => this.openDeck(deck)}
                            />
                        ) }
                    />
                )}
            </View>
        );
    }
    
    openDeck = (deck) => {
        this.props.navigation.navigate('Deck', {deck} )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});