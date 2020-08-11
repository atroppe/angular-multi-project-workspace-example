import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-header',
  template: ` <lib-navigation></lib-navigation> `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
