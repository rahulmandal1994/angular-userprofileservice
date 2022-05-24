import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userprofile } from './userprofile';
@Injectable()
export class UserprofileService {
  private _producturl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getproducts(): Observable<any> {
    return this.http.get(this._producturl);
  }
}
