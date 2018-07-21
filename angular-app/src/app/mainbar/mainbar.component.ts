import { Component, Input } from '@angular/core';

@Component({
    selector: 'mainbar',
    templateUrl: './mainbar.component.html',
    styleUrls: ['./mainbar.component.css']
})
export class MainBarComponent {
    items:Array<any> = [];
    constructor (){
        this.items = [
            { id: 1, title: 'Zigzag Watch', color: 'Blue' },
            { id: 2, title: 'Zigzag Phone', color: 'Red' },
            { id: 3, title: 'Zigzag Watch', color: 'Green' },
          ];
    }
}