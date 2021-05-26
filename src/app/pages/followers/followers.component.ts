import {Component, OnDestroy, OnInit} from '@angular/core';
import {FollowersService} from "../../services/followers.service";
import {Follower} from "../../interfaces";
import {Subject, Subscription} from "rxjs";
import {FormBuilder, FormGroupDirective, Validators} from "@angular/forms";

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit, OnDestroy {
  public followers: Follower[] = [];
  public followersSub: Subscription | undefined;

  formEventsSubject: Subject<void> = new Subject<void>();

  followerForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    website: ['', Validators.required]
  })

  constructor(
    private followersServ: FollowersService,
    private fb: FormBuilder
  ) {
  }

  onSubmit(f: FormGroupDirective): void {
    this.followers.splice(0, 0, this.followerForm.value);
    this.formEventsSubject.next();
    f.resetForm()
  }

  submit() {
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

  public onBanFollower(follower: Follower) {
    this.followersServ.banFollower(follower.id)
      .subscribe((followersRes) => {
        let index = this.followers.indexOf(follower);
        this.followers.splice(index, 1)
      })
  }
}
