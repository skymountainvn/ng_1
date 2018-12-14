import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { WordComponent } from './word.component';
import { WordFormComponent } from './word-form.component';
import { WordFilterComponent } from './word-filter.component';


import { shouldShowFormReducer } from './ngrx/shouldShowFormReducer';
import { wordsReducer } from './ngrx/wordsReducer';
import { filterStatusReducer } from './ngrx/filterStatusReducer';
import { WordService } from './word.service';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { Http, HttpModule } from '@angular/http';
// import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    WordFormComponent,
    WordComponent,
    WordFilterComponent,
    SignInFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({
      words : wordsReducer,
      shouldShowForm : shouldShowFormReducer,
      filterStatus : filterStatusReducer
    }),
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
