import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { TutorialComponent } from './tutorial.component';
import { Directive } from './directive.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, TutorialComponent, Directive ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
