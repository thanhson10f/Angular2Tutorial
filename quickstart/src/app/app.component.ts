import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello 3 {{name}}</h1>
  <my-tutorial>Loading...</my-tutorial>`,
})
export class AppComponent  { name = 'Angular'; }
