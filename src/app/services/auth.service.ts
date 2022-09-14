import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }

  login(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email, password)
      .then((userData: unknown) => resolve(userData), 
        (err: any) => reject(err))
    })

  }
  getAuth(){
    return this.afAuth.authState.pipe(map((auth: any) => auth))
  }
}

// this.afAuth.auth.signInWithEmailAndPassword(email, password).then((userData: unknown) => resolve(userData), 
//         (err: any) => reject(err))
// this should be, but auth gave us an error