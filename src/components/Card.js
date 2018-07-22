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

const Card = ({index, total, question, mode = 'QUESTION', onFlip, onCorrectPress, onIncorrectPress}) => {
    return (
        <View flex="1" styles={styles.container}>
            <View margin={10}>
                <Text style={styles.index}>
                    {index+1} / {total}
                </Text>
            </View>
            <View flex="2" alignItems="center" justifyContent="center" style={styles.container}>
                <Text style={styles.title}>
                    {mode === 'QUESTION' ? question.question : question.answer}
                </Text>
                {mode === 'QUESTION' ? (
                    <FlipButton text="Answer" onPress={onFlip} />
                ) : (
                    <FlipButton text="Question" onPress={onFlip} />
                )}
            </View>
            <View height={200} alignItems="center" justifyContent="start" style={styles.container}>
                <Button type="GREEN" title="Correct" onPress={onCorrectPress} />
                <Button type="RED" title="Incorrect" onPress={onIncorrectPress}/>
            </View>
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    index: {
        fontSize: 20
    },
    container: {
        margin: 10
    },
    title: {
        fontSize: 35,
        textAlign: 'center'
    }
});