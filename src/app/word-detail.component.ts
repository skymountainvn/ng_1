import {Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Person } from './person'

@Component({
    template:  ` 
    <p> WORD DETAIL </p>
    <p *ngIf="!person"> Không tìm thấy 404 </p>
    <div *ngIf="person"> 
        <p>NAME: {{person.name}} </p>
        <p>AGE: {{person.age}} </p>
        <p>HEIGHT: {{person.height}} </p>
    </div>
    `
})

export class WordDetailComponent {
    person: Person;
    constructor(private route: ActivatedRoute) {
        this.route.paramMap.subscribe( p => {
            this.person = Person.findPersonById(p.get('_id'));
        });
    }   
}