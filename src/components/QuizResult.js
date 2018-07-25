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
        <View flex="1" styles={styles.container}>
            <View flex="2" alignItems="center" justifyContent="center" style={styles.container}>
                <AnimatedPie percentage={score} subtitle={getAppreciation(score)} />
            </View>
            <View height={200} alignItems="center" justifyContent="start" style={styles.container}>
                <Button type="WHITE" title="< Go back" onPress={onBackPress} />
                <Button type="BLACK" title="Restart Quiz" onPress={onRestartPress} />
            </View>
        </View>
    );
};

export default QuizResult;

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
});