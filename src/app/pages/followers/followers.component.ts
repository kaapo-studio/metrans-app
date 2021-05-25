import {Component, OnDestroy, OnInit} from '@angular/core';
import {FollowersService} from "../../services/followers.service";
import {Follower} from "../../interfaces";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit, OnDestroy {
  public followers: Follower[] | undefined;
  private followersSub: Subscription | undefined;

  constructor(private followersServ: FollowersService) {
  }

  ngOnInit(): void {
    this.followersSub = this.followersServ.getFollowers()
      .subscribe((followersRes) => {
        this.followers = Object.values(followersRes);
      });

  }

  ngOnDestroy() {
    if (this.followersSub) {
      this.followersSub.unsubscribe()
    }
  }

}
