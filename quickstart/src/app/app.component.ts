import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <my-tutorial>Loading...</my-tutorial>
  <img [src]="image"/>
  <input type="text" [value]="trans" #inputText/>
  <h3 [class.title]="is_apply">Test Apply Class</h3>
  <h5 [style.color]="isBlue?'blue':'orange'">Test Style binding</h5>

  <input type="button" value="Event binding" (click)="OpenWindow(inputText.value)"/>
  <h2>Two way binding</h2>
  First name: <input type="text" [(ngModel)]="fname" />
  Last name: <input type="text" [(ngModel)]="lname" />

  Full name: {{fname}} {{lname}}
  `,
  styles: [`
  h4{
    color: blue;
  }

  .title{
    color: red;
    font-weight: bold;
  }
  `]
})
export class AppComponent  { 
  public  name = 'Son'; //Interpolation binding
 
 //Property binding
 public image = "http://lorempixel.com/200/200"
 public trans = "This is my textbox"

 public is_apply = true;
 public isBlue = false;

 public OpenWindow(val: any){
    alert(val);
 } 
}
