import {Component} from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `
    <h2>Tutorial Component {{id}}</h2>
    <h4>Test Style</h4>
    `,
    styles: ['h4{color: red}']
})
export class TutorialComponent{id="12345"}