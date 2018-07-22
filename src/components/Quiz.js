import React, {Component} from 'react';
import {inject, observer} from "mobx-react";
import Card from "./Card";

@inject('deckStore')
@observer
export default class Quiz extends Component {
    /*static getDerivedStateFromProps(props){
        const navIndex = props.navigation.state.params.index;
        return {
            index: props.index !== undefined ? props.index : navIndex
        }
    }*/
    state = {
        index: 0,
        mode: 'QUESTION'
    }
    render() {
        const { index, mode } = this.state;
        const question = this.getCurrentQuestion();
        return (
            <Card
                index={index}
                question={question}
                mode={mode}
            />
        );
    }
    
    getCurrentQuestion() {
        const deckId = this.props.navigation.state.params.deckId;
        const deck = this.props.deckStore.getDeck(deckId);
        return deck.questions[this.state.index];
    }
}
