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
}