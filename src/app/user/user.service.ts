import { User } from './user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData = new User();
  readonly rootUrl = 'http://localhost:50988/api';

  constructor(private readonly _http: HttpClient) {}

  postUserForLogin(formData: User) {
    return this._http.get(this.rootUrl + '/User/' + formData.name + '/' + formData.password);
  }
}
