import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FollowersComponent} from './followers.component';
import {FollowersRoutingModule} from "./followers-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {ComponentsModule} from "../../components/components.module";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    FollowersComponent
  ],
  imports: [
    CommonModule,
    FollowersRoutingModule,
    MatCardModule,
    MatButtonModule,
    ComponentsModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ]
})
export class FollowersModule {
}
