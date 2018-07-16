import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {FormControl, FormGroup} from '@angular/forms';
import {AppService} from "../app.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public form: FormGroup = new FormGroup(
    {
      userName: new FormControl(),
      userPassword: new FormControl()
    });

  constructor(private authService: AuthService, private appService: AppService) {
  }

  ngOnInit(){
    // this.appService.isAuthChecked(false);
  }


  public sendLoginData() {
    this.authService.logIn(this.form.value.userName, this.form.value.userPassword);
    console.log('send data succesfully');
    this.form.reset();
  }
}