import { Component, Input } from '@angular/core';
import { DataService } from '../service/data.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'topselling',
    templateUrl: './topselling.component.html',
    styleUrls: ['./topselling.component.css', ]
})
export class TopSellingComponent implements OnInit {
    items:Array<any> = [];
    constructor (private _dataService : DataService){
        this._dataService.getItems().subscribe(res => this.items = res);
    }

    ngOnInit() {

    }
}