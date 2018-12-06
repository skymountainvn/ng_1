// thanh roll chon SHOW ALL _ SHOW FORGOT _ SHOW MEMORIZED
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-word-filter',
  template:`            
    <select
         class="form-control"
        style="width: 200px"
        [(ngModel)]="filterStatus"
        (change)="onChange($event)"
    >       
        <option value="SHOW_ALL">SHOW ALL</option>
        <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
        <option value="SHOW_FORGOT">SHOW FORGOT</option>
    </select>
  `
  
})

export class WordFilterComponent{
    @Input() filterStatus: string;
    @Output() onChangeFilterStatus = new EventEmitter();
    onChange(evt) { 
        console.log(evt);
        const newFilterStatus = evt.target.value;
        this.onChangeFilterStatus.emit(newFilterStatus);
    }
}