import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"



import { AppComponent } from './app.component';
import { WordComponent } from './word.component';
import { WordFormComponent } from './word-form.component';
import { WordFilterComponent } from './word-filter.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    WordFormComponent,
    WordFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
