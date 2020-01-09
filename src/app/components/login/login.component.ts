import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isDisableButton = false;
  userName;
  password;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }


  authenticateUser = () => {
    if(this.userName && this.password) {
      if(this.loginService.authenticateUser(this.userName, this.password)) {
        alert('Invalid Credentials')
      }
    }
  }
}
