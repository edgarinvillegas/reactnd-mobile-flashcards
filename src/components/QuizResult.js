import React from 'react';
import {StyleSheet, View} from "react-native";

import Button from "./common/Button";
import AnimatedPie from "./AnimatedPie";

function getAppreciation(score) {
    return (
        score < 1 ? 'Not a single point!' :
        score <= 25 ? 'You\'d better study!' :
        score <= 50 ? 'Better luck next time!' :
        score <= 75 ? 'We know you can do better!' :
        score <= 90 ? 'Very good!' :
        score < 100 ? 'Excellent!' :
        'Perfect!'
    );
}

const QuizResult = ({ correctCount, total, onBackPress, onRestartPress }) => {
    const score = (correctCount / total * 100).toFixed();
    return (
        <View style={styles.container}>
            <View style={styles.pieContainer}>
                <AnimatedPie percentage={score} subtitle={getAppreciation(score)} />
            </View>
            <View style={styles.buttonsContainer}>
                <Button type="WHITE" title="< Go back" onPress={onBackPress} />
                <Button type="BLACK" title="Restart Quiz" onPress={onRestartPress} />
            </View>
        </View>
    );
};

export default QuizResult;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        marginTop: 20
    },
    pieContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonsContainer: {
        height: 200,
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
});