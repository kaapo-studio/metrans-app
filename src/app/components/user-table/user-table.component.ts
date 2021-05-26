import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Follower} from "../../interfaces";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any> | undefined;

  @Input()
  public followers: Follower[] = [];

  @Output()
  banFollowerEvent: EventEmitter<Follower> = new EventEmitter<Follower>();

  displayedColumns: string[] = ['name', 'username', 'website', 'action'];

  constructor() {
  }

  ngOnInit(): void {
  }

  banFollower(value: Follower) {
    this.banFollowerEvent.emit(value);
    this.table?.renderRows();
  }

}
