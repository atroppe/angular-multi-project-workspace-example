import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-header',
  template: ` <lib-nav></lib-nav> `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
