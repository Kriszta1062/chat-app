import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

//FlashMessageModule

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn?: boolean;
  showRegister?: boolean;

  faUser=faUser;
  faCog=faCog;
  faSignOut=faSignOut

  users: User[] = [];

  constructor(private authService: AuthService, private router: Router, private userService: UserService ) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
       this.isLoggedIn = true;
      } else{
        this.isLoggedIn = false;
      }
    })

    this.userService.getUsers().subscribe((users: any) => {
      this.users = users;
    })
  }

  onLogoutClick(){
    this.userService.updateUserActivityStatus(false);
    this.authService.logout();
    this.router.navigate(['/']);
    this.userService.currentUser = undefined;
  }

}
