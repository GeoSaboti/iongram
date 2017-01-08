import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {} from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(public http: Http) {
  }

}
