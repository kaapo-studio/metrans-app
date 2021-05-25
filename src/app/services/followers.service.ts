import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  constructor(private http: HttpClient) {
  }

  public getFollowers() {
    return this.http.get(environment.usersUrl);
  }

}
