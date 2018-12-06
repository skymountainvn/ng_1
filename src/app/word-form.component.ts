import { Component} from '@angular/core';
import { AppState} from './types';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-word-form',
  template:` 
    <div class="form-group" style = "width:200px"> 
    <button class="btn btn-success form-control" *ngIf="!(shouldShowForm | async)"  > ADD WORD </button>
    <br>
    <br>
        <div *ngIf="shouldShowForm | async">
            <input class="form-control" placeholder="ENGLISH" [(ngModel)]="txtEn">
            <br>
            <input class="form-control" placeholder="VIETNAMESE" [(ngModel)]="txtVn">
            <br>
            <button class="btn btn-success form-control" > ADD WORD </button>
            <br>
      
            <button class="btn btn-danger form-control"  > CANCEL </button>
        </div>
    </div>
 
  `
})

export class WordFormComponent {

    shouldShowForm: Observable<boolean>;
    
    constructor(private store: Store<AppState>){
        this.shouldShowForm = this.store.select('shouldShowForm');
    }
    txtEn = '';
    txtVn = '';
}