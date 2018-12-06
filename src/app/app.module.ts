import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { WordComponent } from './word.component';
import { WordFormComponent } from './word-form.component';

import { shouldShowFormReducer } from './ngrx/shouldShowFormReducer';
import { wordsReducer } from './ngrx/wordsReducer';


// import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    WordFormComponent,
    WordComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      words : wordsReducer,
      shouldShowForm : shouldShowFormReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
