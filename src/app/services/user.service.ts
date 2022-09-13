import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from '../models/user';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersCollection?: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc?: AngularFirestoreDocument<User>;

  constructor(public afs: AngularFirestore) {

    this.usersCollection = this.afs.collection<User>('Users');
    
    this.users = this.usersCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as User;
          data.id=a.payload.doc.id;
          return data;
        })
      })
    );
  }

  getUsers(){
    return this.users;
  }

}
