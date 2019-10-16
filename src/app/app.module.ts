import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProgressIndicatorModule} from 'carbon-components-angular';
import {PlaceholderModule} from 'carbon-components-angular';
import {ButtonModule} from 'carbon-components-angular'
import {CheckboxModule} from 'carbon-components-angular'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressIndicatorModule, PlaceholderModule,ButtonModule,CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
