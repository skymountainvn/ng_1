import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Word } from "./types"


@Component({
  selector: 'app-word',
  template:` 
  <h4 [class]="wordInfo.isMemorized ? 'text-success' : 'text-danger'"> {{wordInfo.en}}  </h4> 


  <p> {{wordInfo.vn}} </p>
  <button class="btn btn-danger" > REMOVE </button>
  <button class="btn btn-success" > TOGGLE </button>
  <br>
  `
  
})
export class WordComponent {
  @Input() wordInfo: Word;

}