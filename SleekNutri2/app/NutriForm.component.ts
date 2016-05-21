import {Component} from '@angular/core';

import {Control , FormBuilder , Validators , NgForm} from '@angular/common';

import {ControlGroup} from '@angular/common';

import {NutriModel} from '../Models/NutriModel.ts'
@Component({
    selector: 'NutriForm',
    templateUrl: 'views/NutriForm.component.html'


})

export class NutriFromComponent { 

    title: number;

    model = new NutriModel();
    

    onSave() {
        console.log("BoGo");
        console.log(this.model.sex);


    }
    
    constructor() {
        
        console.log(this.model);
       // this.title = this.model.sex;
    }
}
