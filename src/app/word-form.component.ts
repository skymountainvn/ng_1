import { Component} from '@angular/core';
import { AppState, Word } from './types';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { WordService} from './word.service'

@Component({
  selector: 'app-word-form',
  template:` 
    <div class="form-group" style = "width:200px"> 
    <button 
        class="btn btn-success form-control" 
        *ngIf="!(shouldShowForm | async)" 
        (click)="showForm();"
    > 
        ADD WORD 
    </button>
    <br>
    <br>
        <div *ngIf="shouldShowForm | async">
            <input class="form-control" placeholder="ENGLISH" [(ngModel)]="txtEn">
            <br>
            <input class="form-control" placeholder="VIETNAMESE" [(ngModel)]="txtVn">
            <br>
            <button 
                class="btn btn-success form-control" 
                (click)="addWord();" 
            > 
                ADD WORD
            </button>
            <br>
      
            <button 
                class="btn btn-danger form-control"  
                (click)="hideForm();" 
            > 
                CANCEL 
            </button>
        </div>
    </div>
 
  `
})

export class WordFormComponent {
    shouldShowForm: Observable<boolean>;
    
    constructor(private store: Store<AppState>, private wordService: WordService){
      this.shouldShowForm = this.store.select('shouldShowForm');
    }
    
    txtEn = '';
    txtVn = '';
    showForm() { this.store.dispatch({ type: 'SHOW_FORM' }); }
    hideForm() { this.store.dispatch({ type: 'HIDE_FORM' }); }
  
    addWord() {
      const { txtEn, txtVn } = this;
      this.wordService.addWord(txtEn, txtVn);
    }
}