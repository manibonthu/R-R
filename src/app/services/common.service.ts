import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { User } from '../components/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private loggedInUser$ = new BehaviorSubject<Partial<User>>({});

  getLoggedInUser(): Observable<Partial<User>> {
    return this.loggedInUser$
  }

  storeLoggedInUser(user :User): void {
    this.loggedInUser$.next(user);
  }
  constructor(private http : HttpClient ) { }
  login(username: string,password: string):Observable<User> {
    return this.http.get<User>('https://run.mocky.io/v3/2340fee4-909d-45c6-afa4-a395dfc6f5d6')
  }
}
