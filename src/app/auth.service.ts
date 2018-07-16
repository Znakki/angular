import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public logIn(userName, userPassword) {
    localStorage.setItem('userName', userName);
    localStorage.setItem('userPassword', userPassword);
    console.log(userName, userPassword );

    console.log('login method works');
  }

  public logOut() {
    localStorage.clear();
    console.log('logOut method works');
  }

  public isAuthenticated(): boolean {
    console.log('isAuthenticated method works');
    return true;
  }

  public getUserInfo () {
    console.log('getUserInfo method works');

  }
}