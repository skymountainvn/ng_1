import { Component } from '@angular/core';

@Component({
  selector: 'app-word',
  template:` 
    <div> 
        <h4 style="color:red" *ngIf="!isMemorized"> {{ en }} </h4>
        <h4 style="color:green" *ngIf="isMemorized"> {{ en }} </h4>
        <p> {{ vn }} </p>
        <button 
            class="{{isMemorized ? 'btn btn-success' : 'btn btn-danger' }}"  
            (click)="toggleIsMemorized();"
        > 
            BUTTON TOGGLE
        </button>
    </div>`
  
})
export class WordComponent {
    en= 'one';
    vn= 'một';
    isMemorized= false;
    // en: string;
    // vn: string;
    // isMemorized: boolean;
}