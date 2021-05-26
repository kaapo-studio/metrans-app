import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Follower} from "../../interfaces";
import {MatTable} from "@angular/material/table";
import {Observable, Subscription} from "rxjs";
import firebase from "firebase";
import {AngularFireAuth} from "@angular/fire/auth";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit, OnDestroy {

  @Input()
  public followers: Follower[] = [];

  @Input()
  public formEvent: Observable<void> | undefined;

  formEventsSubscription: Subscription | undefined;

  @Output()
  banFollowerEvent: EventEmitter<Follower> = new EventEmitter<Follower>();

  @ViewChild(MatTable) table: MatTable<any> | undefined;

  displayedColumns: string[] = ['name', 'website', 'action'];

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
    this.formEventsSubscription = this.formEvent?.subscribe(() => this.onRefreshTable());
  }

  ngOnDestroy() {
    if (this.formEventsSubscription) {
      this.formEventsSubscription.unsubscribe();
    }
  }

  banFollower(value: Follower) {
    this.banFollowerEvent.emit(value);
    this.table?.renderRows();
  }


  public onRefreshTable() {
    this.table?.renderRows()
  }

}
