import { Component } from '@angular/core';
import { Word , AppState } from './types';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  words : Observable<Word[]>;
  constructor(private store: Store<AppState>) {
    this.words= this.store.select('words');
  }



}

