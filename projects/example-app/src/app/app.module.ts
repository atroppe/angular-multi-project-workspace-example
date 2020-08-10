import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from 'projects/components-library/header/src/public-api';
import { UiLibraryModule } from 'projects/ui-library/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatSliderModule, UiLibraryModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
