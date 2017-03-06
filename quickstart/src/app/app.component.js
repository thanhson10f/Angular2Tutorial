"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Son'; //Interpolation binding
        //Property binding
        this.image = "http://lorempixel.com/200/200";
        this.trans = "This is my textbox";
        this.is_apply = true;
        this.isBlue = false;
    }
    AppComponent.prototype.OpenWindow = function (val) {
        alert(val);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>Hello {{name}}</h1>\n  <my-tutorial>Loading...</my-tutorial>\n  <img [src]=\"image\"/>\n  <input type=\"text\" [value]=\"trans\" #inputText/>\n  <h3 [class.title]=\"is_apply\">Test Apply Class</h3>\n  <h5 [style.color]=\"isBlue?'blue':'orange'\">Test Style binding</h5>\n\n  <input type=\"button\" value=\"Event binding\" (click)=\"OpenWindow(inputText.value)\"/>\n  <h2>Two way binding</h2>\n  First name: <input type=\"text\" [(ngModel)]=\"fname\" />\n  Last name: <input type=\"text\" [(ngModel)]=\"lname\" />\n\n  Full name: {{fname}} {{lname}}\n  ",
            styles: ["\n  h4{\n    color: blue;\n  }\n\n  .title{\n    color: red;\n    font-weight: bold;\n  }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map