import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  email!: string;
  password!: string;
  error?: string;

  user: User = {
    firstName: '',
    lastName: '',
    active: true,
    pic: '',
    email: '',
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    // pop up messages missing
    if (
      this.user.firstName != '' &&
      this.user.lastName != '' &&
      this.user.pic != '' &&
      this.user.email != ''
    ) {
      this.authService
        .register(this.email, this.password)
        .then((res) => {
          this.user.active = true;
          this.userService.addUser(this.user);

          const sub = this.userService.getUsers().subscribe((users) => {
            sub.unsubscribe();
            const user = users.find((u) => u.email === this.email);
            this.userService.currentUser = user;
          });
          this.router.navigate(['/profile']);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.error = 'All field must be filled!'
      console.log(this.error);
      
    }
  }
}
