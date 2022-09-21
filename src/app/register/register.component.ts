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
  // auth = getAuth();

  email!: string;
  password!: string;
  error?: string;

  user: User = {
    firstName: '',
    lastName: '',
    active: true,
    rooms: [],
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
    // pop up messages needed

    this.authService
      .register(this.email, this.password)
      .then((res) => {
        this.userService
          .getUsers()
          .pipe(first())
          .subscribe((users) => {
            const user = users.find((u) => u.email === this.email);
            if (user) {
              this.error = 'Your e-mail address must be unique!';
            }
          });
        if (
          this.user.firstName != '' &&
          this.user.lastName != '' &&
          this.user.pic != '' &&
          this.user.email != ''
        ) {
          this.userService.addUser(this.user);
          this.user.firstName = '';
          this.user.lastName = '';
          this.user.active = true;
          this.user.rooms = [];
          this.user.pic = '';
          this.user.email = '';
        }
        this.userService.updateUserActivityStatus(true);
        this.router.navigate(['/profile']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
