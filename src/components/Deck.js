import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Alert, View, Text, StyleSheet } from 'react-native';

import Button from "./common/Button";

@observer
export default class Deck extends Component {
    static navigationOptions = ({ navigation }) => {
        const { deck } = navigation.state.params;
        return {
            title: deck.title
        }
    };
    render() {
        const deck = this.getCurrentDeck();
        return (
            <View style={styles.container}>
                <View style={styles.titleSubtitleContainer}>
                    <Text style={styles.title}>
                        {deck.title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {deck.questions.length} {deck.questions.length === 1 ? 'card' : 'cards'}
                    </Text>
                </View>
                <View style={styles.buttonsContainer}>
                    <Button type="WHITE" title="Add Card" onPress={this.onAddCard} />
                    <Button type="BLACK" title="Start Quiz" onPress={this.startQuiz} />
                </View>
            </View>
        );
    }
    
    getCurrentDeck = () => {
        return this.props.navigation.state.params.deck;
    };
    
    onAddCard = () => {
        this.props.navigation.navigate('NewCard', {
            deckId: this.getCurrentDeck().title
        });
    };
    
    startQuiz = () => {
        if(this.getCurrentDeck().questions.length === 0) {
            Alert.alert('Your deck doesn\'t have cards!\nPlease add cards first.');
            return;
        }
        this.props.navigation.navigate('Quiz', {
            deckId: this.getCurrentDeck().title
        });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleSubtitleContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 45
    },
    subtitle: {
        color: '#666666',
        fontSize: 30
    },
    buttonsContainer: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});