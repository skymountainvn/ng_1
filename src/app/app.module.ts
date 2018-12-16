import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { StoreModule } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import { RouterModule , Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WordComponent } from './word.component';
import { WordFormComponent } from './word-form.component';
import { WordFilterComponent } from './word-filter.component';


import { shouldShowFormReducer } from './ngrx/shouldShowFormReducer';
import { wordsReducer } from './ngrx/wordsReducer';
import { filterStatusReducer } from './ngrx/filterStatusReducer';

import { WordService } from './word.service';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

import { WordListComponent } from './word-list.component';
import { WordDetailComponent } from './word-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { from } from 'rxjs';
const RoutesConfig: Routes = [
  { path: 'list', component: WordListComponent},
  { path: 'detail/:_id', component: WordDetailComponent},
  { path: '', redirectTo: '/list',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WordFormComponent,
    WordComponent,
    WordFilterComponent,
    SignInFormComponent,
    SignUpFormComponent,
    WordListComponent,
    WordDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      words : wordsReducer,
      shouldShowForm : shouldShowFormReducer,
      filterStatus : filterStatusReducer
    }),
    RouterModule.forRoot(
      RoutesConfig
    ),
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
