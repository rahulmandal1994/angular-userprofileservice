import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userprofile } from './userprofile';
const headers = {
  Authorization: 'Bearer my-token',
  'My-Custom-Header': 'foobar',
};
@Injectable()
export class UserprofileService {
  private _producturl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getproducts(): Observable<any> {
    const headers = {
      Authorization: 'Bearer my-token',
      'My-Custom-Header': 'foobar',
    };
    const params = {};
    return this.http.get<userprofile[]>(this._producturl, { headers, params });
  }
}
