import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatLayoutComponent } from './pages/chat-layout/chat-layout.component';
import { MessageComponent } from './pages/message/message.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ChatLayoutComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    SharedModule
  ]
})
export class ChatModule { }
