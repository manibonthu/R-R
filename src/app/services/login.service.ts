import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loggedInUser = new Subject<any>()
  constructor(private http : HttpClient ) { }
  login(username: string,password: string):Observable<any> {
    return this.http.get('https://run.mocky.io/v3/2340fee4-909d-45c6-afa4-a395dfc6f5d6')
  }
}
