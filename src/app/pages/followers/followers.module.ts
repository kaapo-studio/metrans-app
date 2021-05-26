import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FollowersComponent} from './followers.component';
import {FollowersRoutingModule} from "./followers-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    FollowersComponent
  ],
    imports: [
        CommonModule,
        FollowersRoutingModule,
        MatCardModule,
        MatButtonModule,
        ComponentsModule
    ]
})
export class FollowersModule {
}
