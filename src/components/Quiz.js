import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import Card from "./Card";
import QuizResult from "./QuizResult";
import {saveQuizDateAndScheduleNextNotification} from "../helpers/notifications";

@inject('deckStore')
@observer
export default class Quiz extends Component {
    state = {
        index: 0,
        mode: 'QUESTION',
        correctCount: 0
    }
    render() {
        const { index, mode, correctCount } = this.state;
        const total = this.getTotalQuestions();
        if(index >= total) {
            return (
                <QuizResult
                    correctCount={correctCount}
                    total={total}
                    onBackPress={() => this.props.navigation.goBack()}
                    onRestartPress={() => this.setState({ index: 0, correctCount: 0 })}
                />
            );
        }
        const question = this.getCurrentQuestion();
        return (
            <Card
                index={index}
                total={total}
                question={question}
                mode={mode}
                onFlip={this.onFlip}
                onCorrectPress={this.onCorrect}
                onIncorrectPress={this.onIncorrect}
            />
        );
    }
    
    getTotalQuestions = () => {
        return this.getCurrentDeck().questions.length;
    }
    
    goNext = () => {
        if(this.state.index + 1 >= this.getTotalQuestions()) {
            saveQuizDateAndScheduleNextNotification(new Date());
        }
        this.setState((state) => ({
            index: state.index + 1
        }));
    }
    
    onCorrect = () => {
        this.setState((state) => ({
            correctCount: state.correctCount + 1
        }));
        this.goNext();
    }
    
    onIncorrect = () => {
        this.goNext();
    }
    
    onFlip = () => {
        this.setState((state) => ({
            mode: state.mode === 'QUESTION' ? 'ANSWER' : 'QUESTION'
        }));
    };
    
    getCurrentDeck() {
        const deckId = this.props.navigation.state.params.deckId;
        return this.props.deckStore.getDeck(deckId);
    }
    
    getCurrentQuestion() {
        return this.getCurrentDeck().questions[this.state.index];
    }
}
