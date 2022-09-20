import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { first, pipe } from 'rxjs';
//import FlashMessagesService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router, private userService: UserService) {
   }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.router.navigate(['/profile']); // if we are logged in this will brings us back to the profile, if we want to change to login
      }
    })

    
  }

  onSubmit(){ // pop up messages needed
    this.authService.login(this.email, this.password).then((res) => {
      this.userService.getUsers().pipe(first()).subscribe((users) => {
        const user = users.find((u) => u.email === this.email);
       this.userService.currentUser = user;
       this.userService.updateUserActivityStatus(true);
      })
      this.router.navigate(['/profile'])      
    })
    .catch(err => {
      console.log(err);
      
    });
  }

 

}
