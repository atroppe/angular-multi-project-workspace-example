import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-ui-library',
  template: `
    <h1>wat</h1>
    <p>
      ui-library works! change name to ui-components?
    </p>
  `,
  styles: [],
})
export class UiLibraryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
