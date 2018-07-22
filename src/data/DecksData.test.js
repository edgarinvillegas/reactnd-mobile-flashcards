import { toJS } from 'mobx';

import DecksData from "./DecksStore";

describe('DecksData tests', () => {
    const sampleData = data = {
        React: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure?',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    };
    
    const decks = new DecksData(sampleData);
    it('should getJS() succesfully', () => {
        expect(decks.toJS()).toEqual(sampleData);
    });
    it('should getDecks() succesfully', () => {
        expect(Object.keys(decks.getDecks())).toEqual(['React', 'JavaScript']);
    });
    it('should getDeck() succesfully', () => {
        expect(decks.getDeck('JavaScript').title).toEqual('JavaScript');
    });
    it('should addDeck$() succesfully', () => {
        decks.addDeck$('Mobx')
        expect(decks.getDecks()['Mobx']).toBeDefined();
    });
    it('should addCardToDeck$() succesfully', () => {
        const deck = decks.getDecks()['Mobx'];
        const question1 = {
            question: 'Mobx question 1',
            answer: 'Mobx answer 1'
        };
        decks.addCardToDeck$('Mobx', question1);
        expect(toJS(deck.questions[0])).toEqual(question1);
        const question2 = {
            question: 'Mobx question 2',
            answer: 'Mobx answer 2'
        };
        decks.addCardToDeck$('Mobx', question2);
        expect(toJS(deck.questions[1])).toEqual(question2);
    });
});