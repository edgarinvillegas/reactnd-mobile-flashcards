import React, { Component } from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, View} from 'react-native';
import {inject, observer} from "mobx-react";

import Button from "./common/Button";


@inject('deckStore')
@observer
export default class NewDeck extends Component {
    state = {
        deckTitle: ''
    }
    
    render() {
        return (
            <KeyboardAvoidingView flex="1" behavior="padding" styles={styles.container}>
                <View flex="2" alignItems="center" justifyContent="center" style={styles.container}>
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
                <View flex="1" alignItems="center" justifyContent="start" style={styles.container}>
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
        this.props.navigation.navigate('NewCard', { deckId: deckTitle } );
    }
}

const styles = StyleSheet.create({
    container: {
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