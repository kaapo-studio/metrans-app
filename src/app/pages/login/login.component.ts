import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroupDirective, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Credentials} from "../../interfaces";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginAuth: boolean = true;
  public loginImg: string = './assets/svg/login/account.svg';
  public signUpImg: string = './assets/svg/login/signup.svg';
  public welcomeImg: string = './assets/svg/login/welcome.svg';

  authForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    public auth: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  onSubmitAuth(f: FormGroupDirective): void {
    const {email, password} = this.authForm.value;
    const credentials: Credentials = {
      email,
      password
    }
    console.log('credrentials', credentials)
    console.log('this.authForm', this.authForm.value)
    if (this.loginAuth) {
      this.auth.login(credentials)
    } else if (!this.loginAuth) {
      this.auth.emailSignup(credentials)
    }
    f.resetForm()
  }
  submit() {
  }

}
