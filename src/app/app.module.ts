import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InpNameComponent } from './inp-name/inp-name.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OptionComponent } from './option/option.component';

@NgModule({
  declarations: [
    AppComponent,
    InpNameComponent,
    OptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
