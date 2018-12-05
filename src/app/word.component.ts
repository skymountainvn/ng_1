import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-word',
  template:` 
  <p class="wordInfo.isMemorized ? 'text-success' : 'text-danger'"> {{wordInfo.en}}  <p>
  <p> {{wordInfo.vn}} </p>
  <button class="btn btn-danger"> REMOVE </button>
  <button class="btn btn-success"> TOGGLE </button>
  <br>
  `
  
})
export class WordComponent {
    @Input() wordInfo: any ;

}