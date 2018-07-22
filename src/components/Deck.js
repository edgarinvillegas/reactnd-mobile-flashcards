import React, { Component } from 'react';
import {inject, observer} from 'mobx-react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import Button from "./common/Button";

export default class Deck extends Component {
    static navigationOptions = ({ navigation }) => {
        const { deck } = navigation.state.params;
        return {
            title: deck.title
        }
    }
    render() {
        console.log('this.props', this.props);
        const deck = this.props.navigation.getParam('deck');
        return (
            <View flex="1" styles={styles.container}>
                <View flex="2" alignItems="center" justifyContent="center" style={styles.container}>
                    <Text style={styles.title}>
                        {deck.title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {deck.questions.length} cards
                    </Text>
                </View>
                <View height={300} alignItems="center" justifyContent="start" style={styles.container}>
                    <Button type="WHITE" title="Add Card" />
                    <Button type="BLACK" title="Start Quiz" />
                    {/*<Button type="GREEN" title="Correct" />*/}
                    {/*<Button type="RED" title="Incorrect" />*/}

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
    },
    title: {
        fontSize: 45
    },
    subtitle: {
        color: '#666666',
        fontSize: 30
    }
});