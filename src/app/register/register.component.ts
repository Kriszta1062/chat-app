import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // auth = getAuth();

  email!:string;
  password!:string;

   user: User = {
     id:'',
     firstName:'',
     lastName:'',
     active: true,
     rooms: [], 
     pic: '',
     email: '',
   }


  constructor(private authService: AuthService, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
  }

onSubmit(){ // pop up messages needed
  this.authService.register(this.email, this.password).then(user => {
    this.router.navigate(['/profile']);
    
    if(this.user.firstName != '' && this.user.lastName != '' && this.user.pic != '' ){
          this.userService.addUser(this.user);
          this.user.firstName='';
          this.user.lastName='';
          this.user.active= true;
          this.user.rooms= []; 
          this.user.pic= '';
          this.user.email = this.email;
        }
  }).catch(err => {
    console.log(err);
  });
}


}
