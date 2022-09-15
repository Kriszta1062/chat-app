import { Component, OnInit, Input} from '@angular/core';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCake } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  faMailBulk=faMailBulk;
  faPhone=faPhone;
  faCake=faCake;
  faHome=faHome;

  users: User[] = [];
  authService: any;
  @Input() loggedInUser: any;

  constructor(private userService: UserService, authService: AuthService) { }

  ngOnInit(): void {
  
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    })
  
  }

}
