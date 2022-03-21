import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page.component';
import { MessageComponent } from '../../components/message/message.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PageRoutingModule} from "./page-routing.module";


@NgModule({
  declarations: [
    PageComponent, MessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PageRoutingModule
  ]
})
export class PageModule { }
