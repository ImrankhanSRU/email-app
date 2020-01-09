import { Injectable } from '@angular/core';
import { users } from '../../components/mockData.json'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }
  authenticateUser = (uname, pwd) => {
    console.log(name, pwd)
    let user = users.filter(item => item.userName == uname && item.pwd == pwd)
    if(user.length) {
      this.router.navigate(['/dashboard'])
      localStorage.setItem('loggedUserId', JSON.stringify(user[0].id))
      return false
    }
    return true
  }

  logout = () => {
    localStorage.removeItem('loggedUserId')
    this.router.navigate(['/login'])
  }
}
