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
const core_1 = require('@angular/core');
const NutriModel_ts_1 = require('../Models/NutriModel.ts');
let NutriFromComponent = class NutriFromComponent {
    constructor() {
        this.model = new NutriModel_ts_1.NutriModel();
        console.log(this.model);
        this.title = this.model.sex;
    }
    onSave() {
        console.log("BoGo");
        console.log(this.model.sex);
    }
};
NutriFromComponent = __decorate([
    core_1.Component({
        selector: 'NutriForm',
        templateUrl: 'views/NutriForm.component.html'
    }), 
    __metadata('design:paramtypes', [])
], NutriFromComponent);
exports.NutriFromComponent = NutriFromComponent;
//# sourceMappingURL=NutriForm.component.js.map