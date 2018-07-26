import React, { Component } from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, View} from 'react-native';
import {inject, observer} from "mobx-react";

import Button from "./common/Button";

@inject('deckStore')
@observer
export default class NewDeck extends Component {
    state = {
        deckTitle: ''
    };
    
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        What is the title of your new deck?
                    </Text>
                    <TextInput
                        placeholder="Deck Title"
                        style={styles.textbox}
                        value={this.state.deckTitle}
                        onChangeText={deckTitle => { this.setState({ deckTitle }) }}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        disabled={!this.state.deckTitle.trim()}
                        type="BLACK"
                        title="Submit"
                        onPress={this.saveDeck}
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
    
    saveDeck = () => {
        const deckTitle = this.state.deckTitle;
        this.props.deckStore.addDeck$(deckTitle);
        this.setState({
            deckTitle: ''
        });
        const newDeck = this.props.deckStore.getDeck(deckTitle);
        this.props.navigation.navigate('Deck', { deck: newDeck });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    textContainer: {
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
        fontSize: 25,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    }
});