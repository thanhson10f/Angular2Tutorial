import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello 3 {{name}}</h1>
  <my-tutorial>Loading...</my-tutorial>
  <h4>test style</h4>
  <h4>test style2</h4>
  `,
  styles: ['h4{color: blue}']
})
export class AppComponent  { name = 'Angular'; }
