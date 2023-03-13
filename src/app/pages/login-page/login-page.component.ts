import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  public myForm = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    newUser: [false]
  })

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log(this.myForm.invalid)

    if (this.myForm.invalid) {
      return;
    }

    const isNewUser = this.myForm.get('newUser').value

    const email = this.myForm.get('email').value
    const password = this.myForm.get('password').value
    const userInfo = new User(email, password)

    let observable = this.authService.login(userInfo)

    if (isNewUser === true) {
      observable = this.authService.registerUser(userInfo)
    }

    observable.subscribe(response => {
      this.authService.storeAccessToken(response.accessToken)
      this.authService.storeUserInfo(response.userInfo)

      this.router.navigateByUrl('/minha-lista')
    })
  }
}
