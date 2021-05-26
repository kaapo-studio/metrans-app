import {NgModule} from "@angular/core";
import {NavComponent} from './nav/nav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from "@angular/material/toolbar";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { UserProfileComponent } from './user-profile/user-profile.component';
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import { UserTableComponent } from './user-table/user-table.component';

@NgModule({
  declarations: [NavComponent, UserProfileComponent, UserTableComponent],
  imports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    CommonModule,
    RouterModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    NavComponent,
    UserProfileComponent,
    UserTableComponent,
  ]
})

export class ComponentsModule {

}
