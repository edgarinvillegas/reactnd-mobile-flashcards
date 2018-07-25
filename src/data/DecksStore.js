import { AsyncStorage } from 'react-native';
import { toJS, observable } from 'mobx';

export default class DecksStore {
    static storageKey = 'MOBILE_FLASHCARDS:data';
    @observable data = {};
    persister = null;
    
    /**
     * @param [data] Initial data
     * @param [persister] Persister object. Should implement async getItem and async setItem. Will default to localStorage
     */
    constructor(data, persister) {
        this.persister = persister || AsyncStorage;
        if(data) {
            Object.assign(this.data, data);
        }
    }
    
    toJS() {
        return toJS(this.data);
    }
    
    getDecks() {
        return this.data;
    }
    
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
    
    async load$() {
        const persistedData = await this.persister.getItem(DecksStore.storageKey);
        if(persistedData) {
            Object.assign(this.data, JSON.parse(persistedData));
        }
    }
    
    async persist$() {
        await this.persister.setItem(DecksStore.storageKey, JSON.stringify(this.toJS()));
    }
}
