import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = {
    location:'',
    firstName:'',
    lastName:'',
    email: '',
    active: true,
    birth:'',
    password: '',
    salt:'kfnjdnbndohjdpiohj',
    rooms: [], //id-s of the rooms we have acces to  
    pic: '',
  }


  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.addUser(this.user);
    this.user.location='';
    this.user.firstName='';
    this.user.lastName='';
    this.user.email= '';
    this.user.active= true;
    this.user.birth='';
    this.user.password= '';
    this.user.salt='kfnjdnbndohjdpiohj';
    this.user.rooms= []; //id-s of the rooms we have acces to  
    this.user.pic= '';
    console.log("registered");
    
  }

}
