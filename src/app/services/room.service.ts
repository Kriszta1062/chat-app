import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Room } from '../models/room';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  roomsCollection?: AngularFirestoreCollection<Room>;
  rooms: Observable<Room[]>;
  roomDoc?: AngularFirestoreDocument<Room>;

  constructor(public afs: AngularFirestore) { 
    this.roomsCollection = this.afs.collection<Room>('Rooms', (ref) => 
      ref.orderBy('name', 'asc')
    ); //order by alphabet
    
    this.rooms = this.roomsCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as Room;
          data.id=a.payload.doc.id;
          return data;
        })
      })
    );

  }

  getRooms(){
    return this.rooms;
  }

  addRoom(room: Room){
    this.roomsCollection?.add(room);
  }

  deleteRoom(room: Room){
    this.roomDoc = this.afs.doc(`Rooms/${room.id}`);
    this.roomDoc.delete();
  }

  updateRoom(room: Room){
    this.roomDoc = this.afs.doc(`Rooms/${room.id}`);
    this.roomDoc.update(room);
  }
}
