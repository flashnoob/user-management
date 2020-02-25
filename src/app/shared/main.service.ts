import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MainService {
  _URL = 'http://localhost:3000'
  constructor(private http: HttpClient) { }


  async createUser(data) {
    return this.http.post(`${this._URL}/register/create`, data)
  }

  async checkEmail(email) {  
    return this.http.post(`${this._URL}/register/check`,{email})
  }
}
