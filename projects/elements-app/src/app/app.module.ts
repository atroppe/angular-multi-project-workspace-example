import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { UiLibraryComponent, UiLibraryModule } from 'projects/ui-library/src/public-api';

@NgModule({
  declarations: [],
  imports: [BrowserModule, UiLibraryModule],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(UiLibraryComponent, { injector: this.injector });
    customElements.define('lib-components', element);
  }
}

// reference: https://medium.com/swlh/angular-elements-create-a-component-library-for-angular-and-the-web-8f7986a82999#:~:text=Currently%2C%20Angular%20Elements%20only%20supports,output%20them%20as%20Custom%20Elements.
