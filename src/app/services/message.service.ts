import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { map, Observable } from 'rxjs';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messagesCollection?: AngularFirestoreCollection<Message>;
  messages: Observable<Message[]>;
  messagesDoc?: AngularFirestoreDocument<Message>;

  constructor(public afs: AngularFirestore) {
    this.messagesCollection = this.afs.collection<Message>('Messages', (ref) =>
      ref.orderBy('time')
    ); 

    this.messages = this.messagesCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as Message;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getMessages() {
    return this.messages;
  }

  addMessage(message: Message) {
    this.messagesCollection?.add(message);
  }

  deleteMessage(message: Message) {
    this.messagesDoc = this.afs.doc(`Messages/${message.id}`);
    this.messagesDoc.delete();
  }
}
