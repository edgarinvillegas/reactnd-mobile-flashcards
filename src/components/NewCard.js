import React, { Component } from 'react';
import {KeyboardAvoidingView, StyleSheet, TextInput, View} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import {inject, observer} from "mobx-react";

import Button from "./common/Button";


@inject('deckStore')
@observer
export default class NewCard extends Component {
    state = {
        question: '',
        answer: ''
    };
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.qaContainer}>
                    <TextInput
                        placeholder="Question"
                        style={styles.textbox}
                        value={this.state.question}
                        onChangeText={question => { this.setState({ question }) }}
                    />
                    <TextInput
                        placeholder="Answer"
                        style={styles.textbox}
                        value={this.state.answer}
                        onChangeText={answer => { this.setState({ answer }) }}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        disabled={!this.state.question.trim() || !this.state.answer.trim()}
                        type="BLACK"
                        title="Submit"
                        onPress={this.saveCard}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
    
    getNavigationParam = (paramKey) => {
        return this.props.navigation.state.params[paramKey];
    };
    
    getDeckId = () => {
        return this.props.navigation.state.params.deckId;
    };
    
    saveCard = () => {
        this.props.deckStore.addCardToDeck$(this.getDeckId(), {
            question: this.state.question,
            answer: this.state.answer
        });
        const deck = this.props.deckStore.getDeck(this.getDeckId());
        this.props.navigation.dispatch(StackActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({routeName: 'DeckTabs'}),
                NavigationActions.navigate({routeName: 'Deck',  params: { deck }})
            ]
        }));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    qaContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 10
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        margin: 10
    },
    textbox: {
        margin: 20,
        alignSelf: 'stretch',
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 15,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    }
});