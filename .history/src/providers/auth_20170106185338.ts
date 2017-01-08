import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FirebaseAuth } from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(
    public http: Http,
    private auth: FirebaseAuth
  ) {
  }

  registerUser (email:string, password: string): any {
    return this.auth.createUser({
      email: email,
      password: password
    })
    .then(() => this.auth.login({email: email, password: password}))
    .then(user => {
      Promise.resolve(user);
    })
    .catch(error => Promise.reject(error))
  }
}
