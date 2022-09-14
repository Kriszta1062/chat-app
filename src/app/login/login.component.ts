import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
//import FlashMessagesService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) {
   }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
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
