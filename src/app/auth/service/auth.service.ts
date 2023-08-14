import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginModel, RegistrationModel } from 'src/app/model/authModel';
import { responseModel } from 'src/app/model/reponseModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = environment.api_url
  isLogin =  new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }
  registration(data: RegistrationModel) {
    return this.http.post<responseModel>(this.API_URL + '/registration', data);
  }

  login(data: LoginModel) {
    return this.http.post<responseModel>(this.API_URL + '/registration', data);
  }

  setTokenInLocalStorage(data: any) {
    localStorage.setItem('access-token', data);
  }

  clearLocalStorage() {
    localStorage.clear();
  }

  logout(data: any) {
    this.clearLocalStorage();
    return this.http.post<responseModel>(this.API_URL + '/logout', data);
  }

  setisLoginValue(value: boolean) {
    this.isLogin.next(value);
  }
}
