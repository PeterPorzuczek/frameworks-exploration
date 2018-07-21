import { Component, Input } from '@angular/core';

@Component({
    selector: 'supportbar',
    templateUrl: './supportbar.component.html',
    styleUrls: ['./supportbar.component.css' ]
})
export class SupportBarComponent {
    options:Array<any> = [];
    languages:Array<any> = [];
    currencies:Array<any> = [];
    constructor (){
        this.options= ['+0123 45 67 89', 'support@cart.com', 'Live Chat'];
        this.languages = ['FIN', 'ENG'];
        this.currencies = ['USD', 'AUD', 'GBP', 'EUR'];
    }
}