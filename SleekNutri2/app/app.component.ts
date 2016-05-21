import { Component } from '@angular/core';
import {NutriFromComponent} from './NutriForm.component'


@Component({
    selector: 'my-app',
    directives: [NutriFromComponent],
    
    template:  '<NutriForm></NutriForm>'
})
export class AppComponent {}
