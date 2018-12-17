import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Store } from '@ngrx/store';
import { Word, AppState } from './types';

@Injectable()
export class WordService {
    constructor(private http: Http, private store: Store<AppState>) {}   

    getWords() {
        const URL = 'http://localhost:3000/word';
        return this.http.get(URL)
        .toPromise()
        .then(response => response.json())
        .then(resJson => {
            if (!resJson.success) return;
            this.store.dispatch({ type: 'SET_WORDS', words: resJson.words });
        });
    }

    addWord(en: string, vn: string) {
        const URL = 'http://localhost:3000/word';
        return this.http.post(URL, { en, vn })
        .toPromise()
        .then(response => response.json())
        .then(resJson => {
            if (!resJson.success) return;
            this.store.dispatch({ type: 'ADD_WORD', word: resJson.word });
        });
    }

    removeWord(_id: string) {
        const URL = 'http://localhost:3000/word';
        return this.http.delete(`${URL}/${_id}`)
        .toPromise()
        .then(response => response.json())
        .then(resJson => {
            if (!resJson.success) return;
            this.store.dispatch({ type: 'REMOVE_WORD', _id });
        });
    }

    toggleWord(_id: string, isMemorized) {
        const URL = 'http://localhost:3000/word';
        return this.http.put(`${URL}/${_id}`, { isMemorized })
        .toPromise()
        .then(response => response.json())
        .then(resJson => {
            if (!resJson.success) return;
            this.store.dispatch({ type: 'TOGGLE_WORD', _id });
        });
    }
}