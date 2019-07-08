import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { PublishableModule } from '@acardigital/publishable';


@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    PublishableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
