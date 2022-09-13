import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Room } from '../models/room';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  roomsCollection?: AngularFirestoreCollection<Room>;
  rooms: Observable<Room[]>;

  constructor(public afs: AngularFirestore) { 
    this.rooms = this.afs.collection<Room>('Rooms').valueChanges();
  }

  getRooms(){
    return this.rooms;
  }


}
