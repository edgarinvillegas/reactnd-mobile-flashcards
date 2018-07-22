import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

import Button from "./common/Button";

const FlipButton = ({text, onPress}) => {
    const styles = StyleSheet.create({
        text: {
            color: 'red',
            fontSize: 30,
            fontWeight: 'bold',
            margin: 10
        }
    });
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

const Card = ({index, question, mode = 'QUESTION', onFlip, onCorrectPress, onIncorrectPress}) => {
    const styles = StyleSheet.create({
        container: {},
        title: {
            fontSize: 45
        }
    });
    return (
        <View flex="1" styles={styles.container}>
            <View flex="2" alignItems="center" justifyContent="center" style={styles.container}>
                <Text style={styles.title}>
                    {mode === 'QUESTION' ? question.question : question.answer}
                </Text>
                {mode === 'QUESTION' ? (
                    <FlipButton text="Answer" />
                ) : (
                    <FlipButton text="Question" />
                )}
            </View>
            <View height={300} alignItems="center" justifyContent="start" style={styles.container}>
                <Button type="GREEN" title="Correct" onPress={onCorrectPress} />
                <Button type="RED" title="Incorrect" onPress={onIncorrectPress}/>
            </View>
        </View>
    );
};

export default Card;