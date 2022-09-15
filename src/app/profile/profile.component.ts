import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  loggedInUser?: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
       this.loggedInUser = auth.email;
      }
    })
  }

}
