import React from 'react';
import {StyleSheet, Text, View} from "react-native";

import Button from "./common/Button";

function getAppreciation(score) {
    return (
        score < 1 ? 'Not a single point!' :
        score <= 25 ? 'What happened?' :
        score <= 50 ? 'Better luck next time!' :
        score <= 75 ? 'You can do better' :
        score <= 90 ? 'Very good!' :
        score < 100 ? 'Excellent!' :
        'Perfect!'
    );
}

const QuizResult = ({ correctCount, total, onBackPress }) => {
    const score = (correctCount / total * 100).toFixed();
    return (
        <View flex="1" styles={styles.container}>
            <View flex="2" alignItems="center" justifyContent="center" style={styles.container}>
                <Text style={styles.title}>
                    {score}%
                </Text>
                <Text style={styles.subtitle}>
                    {getAppreciation(score)}
                </Text>
            </View>
            <View height={200} alignItems="center" justifyContent="start" style={styles.container}>
                <Button type="WHITE" title="< Go back" onPress={onBackPress} />
            </View>
        </View>
    );
};

export default QuizResult;

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    title: {
        fontSize: 100,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 30
    }
});