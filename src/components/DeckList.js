import React, { Component } from 'react';

import {inject, observer} from 'mobx-react';
import {View, Text, StyleSheet} from 'react-native';

/*
{
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'
            }
        ]
    }
*/

const DeckSumary = ({ deck }) => {
    const styles = StyleSheet.create({
        container: {
            height: 150,
            borderBottomWidth: 2,
            borderBottomColor: 'black',
            borderStyle: 'solid'
        },
        title: {
            fontSize: 20
        },
        subtitle: {
            color: '#666666'
        }
    });
    
    return (
        <View alignItems="center" justifyContent="center" style={styles.container}>
            <Text style={styles.title}>
                {deck.title}
            </Text>
            <Text style={styles.subtitle}>
                {deck.questions.length} cards
            </Text>
        </View>
    );
}


@inject('deckStore')
@observer
export default class DeckList extends Component {
    render() {
        const { deckStore } = this.props;
        console.log(Object.entries(deckStore.getDecks()));
        return (
            <View flex="1" styles={styles.container}>
                {Object.entries(deckStore.getDecks()).map( ([deckKey, deck]) => (
                    <DeckSumary deck={deck}/>
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
});