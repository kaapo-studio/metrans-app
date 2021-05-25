import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  public id: string | null;
  public username: string | null;
  private routeSub: Subscription | undefined;

  constructor(private route: ActivatedRoute) {
    this.id = "";
    this.username = "";
  }

  ngOnInit(): void {
    this.routeSub = this.route.paramMap
      .subscribe((params) => {
        this.id = params.get('id');
        this.username = params.get('username');
      })
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

}
