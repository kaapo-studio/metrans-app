import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";
import {Credentials} from "../interfaces";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<firebase.User| null>

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) {
    this.user$ = afAuth.authState;
  }

  login(credentials: Credentials) {
    const {email, password} = credentials;
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('It worked!');
        this.router.navigateByUrl(environment.homeUrl);
      })
      .catch(err => {
        console.log('Something went wrong: ', err.message)
      })
  }

  emailSignup(credentials: Credentials) {
    const {email, password} = credentials;
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Sucess');
        this.router.navigateByUrl(environment.homeUrl);
      })
      .catch(error => {
        console.log('Something went wrong: ', error);
      });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate([environment.homeUrl])
    })
  }
}
