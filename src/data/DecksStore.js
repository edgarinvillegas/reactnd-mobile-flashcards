import { AsyncStorage } from 'react-native';
import { toJS, autorun, computed, observable } from 'mobx';

export default class DecksStore {
    static storageKey = 'MOBILE_FLASHCARDS:data';
    @observable data = {};
    
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
        const persistedData = await AsyncStorage.getItem(DecksStore.storageKey);
        if(persistedData) {
            Object.assign(this.data, JSON.parse(persistedData));
        }
    }
    
    async persist$() {
        await AsyncStorage.setItem(DecksStore.storageKey, JSON.stringify(this.toJS()));
    }
}
