import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user.interface';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public hardcodedUser: User = {
    id: 154554,
    firstName: 'Max',
    lastName: 'Fruzorov'
  };

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public logOut() {
    this.authService.logOut()

  }

}
