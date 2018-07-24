import { toJS, autorun, computed, observable } from 'mobx';

export default class Data {
    static storageKey = 'MOBILE_FLASHCARDS:data';
    @observable data = {};
    
    constructor(data) {
        if(data) {
            Object.assign(this.data, data);
        }
        // autorun(() => console.log(this.theData));
        // autorun(() => console.log(this.theData));
        this.persist$();
    }
    
    /*
    get theData() {
        return this.data;
    }
    */
    
    toJS() {
        return toJS(this.data);
    }
    
    getDecks() {
        return this.data;
    }
    
    /*
    @computed get decks() {
        return this.data;
    }
    */
    
    getDeck(id) {
        return this.data[id];
    }
    
    addDeck$(title) {
        this.data[title] = {
            title,
            questions: []
        }
        return this.persist$();
    }
    
    addCardToDeck$(title, card) {
        this.data[title].questions.push(card);
        return this.persist$();
    }
    
    load$() {
    
    }
    
    persist$() {
    
    }
}
