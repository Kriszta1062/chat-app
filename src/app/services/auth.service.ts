import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password).then(
        (userData: unknown) => resolve(userData),
        (err: any) => reject(err)
      );
    });
  }
  getAuth() {
    return this.afAuth.authState.pipe(map((auth: any) => auth));
  }

  logout() {
    this.afAuth.signOut();
  }

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email, password).then(
        (userData: unknown) => resolve(userData),
        (err: any) => reject(err)
      );
    });
  }
}