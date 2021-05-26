import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {FollowersService} from "../../services/followers.service";
import {Follower} from "../../interfaces";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  public id: string = "";
  public username: string = "";
  public follower: Follower | undefined;
  private routeSub: Subscription | undefined;
  private followersSub: Subscription | undefined;

  constructor(private route: ActivatedRoute, private followersServ: FollowersService) {
  }

  ngOnInit(): void {
    this.routeSub = this.route.paramMap
      .subscribe((params) => {
        const id = params.get('id');
        id !== null ? this.id = id : '';

        const username = params.get('username');
        username !== null ? this.username = username : '';
      })
    this.followersSub = this.followersServ.getFollowers()
      .subscribe((followersRes) => {
        const followers: Follower[] = Object.values(followersRes);
        this.follower = followers.find(elm => elm.id.toString() === this.id);
      });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if (this.followersSub) {
      this.followersSub.unsubscribe()
    }
  }

}
