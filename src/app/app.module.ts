import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"



import { AppComponent } from './app.component';
import { shouldShowFormReducer } from './ngrx/shouldShowFormReducer';
import { wordsReducer } from './ngrx/wordsReducer';


import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    wordsReducer,
    shouldShowFormReducer
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
