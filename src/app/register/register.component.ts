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



  email!:string;
  password!:string;

  // user: User = {
  //   location:'',
  //   firstName:'',
  //   lastName:'',
  //   email: '',
  //   active: true,
  //   birth:'',
  //   password: '',
  //   rooms: [], //id-s of the rooms we have acces to  
  //   pic: '',
  // }


  constructor(private authService: AuthService, private router: Router, private userService: UserService) {}


  ngOnInit(): void {
  }

//   onSubmit(){
//     if(this.user.location != '' && this.user.firstName != '' && this.user.lastName != '' && this.user.pic != '' && this.user.email != '' && this.user.birth != ''){

//     this.userService.addUser(this.user);
//     this.user.location='';
//     this.user.firstName='';
//     this.user.lastName='';
//     this.user.email= '';
//     this.user.active= true;
//     this.user.birth='';
//     // this.user.password= '';
//     this.user.rooms= []; //id-s of the rooms we have acces to  
//     this.user.pic= '';    
//   }
// }

// onSubmit(){ // pop up messages needed
//   this.authService.register(this.user.email, this.user.password, this.user.location, this.user.firstName, this.user.lastName, this.user.birth, this.user.pic).then(res => {
//     console.log('Registered successfully');
//     this.router.navigate(['/profile'])
//   })
//   .catch(err => {
//     console.log(err);
    
//   });
// }

onSubmit(){ // pop up messages needed
  this.authService.register(this.email, this.password).then(res => {
    console.log('Registered successfully');
    this.router.navigate(['/profile'])
  })
  .catch(err => {
    console.log(err);
    
  });
}


}
