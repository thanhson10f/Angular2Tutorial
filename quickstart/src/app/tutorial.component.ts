import {Component} from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: '<h2>Tutorial Component {{id}}</h2>',
    styles: ['h2{color: red}']
})
export class TutorialComponent{id="12345"}