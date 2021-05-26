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
  public followers: Follower[] = [];
  public followersSub: Subscription | undefined;

  constructor(private followersServ: FollowersService) {
  }

  ngOnInit(): void {
    this.followersSub = this.followersServ.getFollowers()
      .subscribe((followersRes) => {
        this.followers = Object.values(followersRes);
        console.log('this.followers', this.followers)
      });
  }

  ngOnDestroy() {
    if (this.followersSub) {
      this.followersSub.unsubscribe()
    }
  }

  public onBanFollower(follower: Follower) {
    this.followersServ.banFollower(follower.id)
      .subscribe((followersRes) => {
        let index = this.followers.indexOf(follower);
        this.followers.splice(index, 1)
        console.log('this.followers', this.followers)
      })
  }

}
