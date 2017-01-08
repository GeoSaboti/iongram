import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FirebaseAuth, FirebaseAuthState } from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(
    public http: Http,
    private auth: FirebaseAuth
  ) {
  }

  registerUser (email:string, password: string):Promise<FirebaseAuthState> {
    return this.auth.createUser({
      email: email,
      password: password
    })
  }
}
