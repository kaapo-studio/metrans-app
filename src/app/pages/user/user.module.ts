import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {UserRoutingModule} from "./user-routing.module";
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  declarations: [
    UserComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,
        ComponentsModule
    ]
})
export class UserModule {
}
