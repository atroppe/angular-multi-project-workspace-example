import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from 'projects/components-library/header/src/public-api';
import { DialogTriggerModule } from 'projects/dialog-trigger/src/public-api';
import { UiLibraryModule } from 'projects/ui-library/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    UiLibraryModule,
    HeaderModule,
    DialogTriggerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
