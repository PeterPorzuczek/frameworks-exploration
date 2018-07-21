import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  result:any;
  constructor(private _http : Http) { }
  getItems(){
    return this._http.get('https://api.jsonbin.io/b/5b537f484d5ea95c8ba7cf73').map(result => this.result = result.json().items);
  }

}