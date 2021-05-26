import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  saveUser(user: firebase.User) {
    this.db.object('/users/' + user.uid).update({
      email: user.email,
    })
  }
}
