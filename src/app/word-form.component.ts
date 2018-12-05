import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-word-form',
  template:` 
    <div class="form-group" style = "width:200px"> 
    <button class="btn btn-success form-control" *ngIf="!isShowForm"  (click)="toggleForm();" > ADD WORD </button>
    <br>
    <br>
        <div *ngIf="isShowForm">
            <input class="form-control" placeholder="ENGLISH" [(ngModel)]="txtEn">
            <br>
            <input class="form-control" placeholder="VIETNAMESE" [(ngModel)]="txtVn">
            <br>
            <button class="btn btn-success form-control" (click)="addWord();"> ADD WORD </button>
            <br>
      
            <button class="btn btn-danger form-control"  > CANCEL </button>
        </div>
    </div>
 
  `
})

export class WordFormComponent {
    // @Input() wordInfo: any ;
    isShowForm= false;
    txtVn="";
    txtEn="";


    @Output() onAddWord = new EventEmitter();
    toggleForm () {
        this.isShowForm=!this.isShowForm;
    }

    addWord() {
        const word = { 
        _id: Math.random() + '',
        en: this.txtEn,
        vn: this.txtVn,
        isMemorized: true
    };
        this.onAddWord.emit(word);
        this.txtEn = '';
        this.txtVn = '';
        this.isShowForm = false;
    }
}