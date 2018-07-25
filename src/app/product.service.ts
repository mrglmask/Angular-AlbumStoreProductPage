import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
///add/operator/map
@Injectable()
export class ProductService {
  private _albumUrl: string = '../assets/album.json';

  //injecting an instance of a service into a class.
  constructor(private _http: Http) {
    
  }

  getAlbum(id:number){
    return this._http.get(this._albumUrl)
    .map(response => response.json());
  }

}
