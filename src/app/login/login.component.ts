import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
//import FlashMessagesService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;
  users: User[] = [];

  constructor(private authService: AuthService, private router: Router, private userService: UserService) {
   }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {

      this.userService.getUsers().subscribe((users) => {
        this.users = users;
        this.users.forEach( user => {
          if(user.email === auth.email){
            user.active = true;
            console.log(user);
            console.log(user.active);
            
          }
        }
        )
      })

      if(auth){
        this.router.navigate(['/profile']); // if we are logged in this will brings us back to the profile, if we want to change to login
      }
    })

    
  }

  onSubmit(){ // pop up messages needed
    this.authService.login(this.email, this.password).then(res => {
      this.router.navigate(['/profile'])      
    })
    .catch(err => {
      console.log(err);
      
    });
  }

 

}
