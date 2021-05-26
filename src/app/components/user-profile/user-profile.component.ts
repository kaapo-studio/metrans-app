import {Component, Input} from '@angular/core';
import {Follower} from "../../interfaces";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  @Input()
  public follower: Follower | undefined;

}
