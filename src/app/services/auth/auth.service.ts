import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces';
import { LoginResponse } from 'src/app/interfaces/login-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private accessTokenKey: string = 'accessToken'
  private userInfoKey: string = 'userInfo'

  constructor(
    public httpClient: HttpClient,
    public router: Router
  ) { }

  public isLogged(): boolean {
    return !!this.getUserAccessToken()
  }

  public getAuthorizationHeader(): HttpHeaders {
    const myHeaders = new HttpHeaders({
      Authorization: `Bearer ${this.getUserAccessToken()}`
    })

    return myHeaders
  }

  public registerUser(newUser: User): Observable<LoginResponse> {
    const url = 'http://localhost:3000/users'

    const recipe = this.httpClient.post<LoginResponse>(url, newUser)

    return recipe
  }

  public login(user: User): Observable<LoginResponse> {
    const url = 'http://localhost:3000/login'

    const recipe = this.httpClient.post<LoginResponse>(url, user)

    return recipe
  }

  public logout(): void {
    localStorage.removeItem(this.accessTokenKey)
    localStorage.removeItem(this.userInfoKey)
    this.router.navigateByUrl('/login')
  }

  public getUserAccessToken(): string {
    const accessToken = localStorage.getItem(this.accessTokenKey)

    return accessToken
  }

  public getUserInfo(): User {
    const stringfiedUserInfo = localStorage.getItem(this.userInfoKey)
    const userInfo = JSON.parse(stringfiedUserInfo) as User

    return userInfo
  }

  public storeAccessToken(accessToken: string): void {
    localStorage.setItem(this.accessTokenKey, accessToken)
  }

  public storeUserInfo(userInfo: User): void {
    const stringfiedData: string = JSON.stringify(userInfo)
    localStorage.setItem(this.userInfoKey, stringfiedData)
  }
}
