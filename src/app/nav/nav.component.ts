import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';
//FlashMessageModule

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isLoggedIn?: boolean;
  loggedInUser?: string;
  showRegister?: boolean;

  faUser=faUser;
  faCog=faCog;
  faSignOut=faSignOut

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
       this.isLoggedIn = true;
       this.loggedInUser = auth.email;
      } else{
        this.isLoggedIn = false;
      }
    })
  }

}
