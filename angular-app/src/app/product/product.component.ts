import { Component, Input } from '@angular/core';


@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css' ]
})
export class ProductComponent {
    @Input() item: any = {};
    constructor() { }
}
