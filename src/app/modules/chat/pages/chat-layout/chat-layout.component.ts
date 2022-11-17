import { Component, OnInit } from '@angular/core';
import { Message } from '@core/models/message.interface';
import { ChatService } from '@modules/chat/services/chat.service';
import * as dataRaw from '../../../../data/mock.users.json';

@Component({
  selector: 'app-chat-layout',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.scss']
})
export class ChatLayoutComponent implements OnInit {

  public message = '';
  // public chat: Array<Message> = [];
  public users: Array<any> = [];

  constructor(
    public _chatSercice: ChatService
  ) { }

  ngOnInit(): void {
    this.getAllUser();
  }

  getAllUser(): void{
    const { users }: any = (dataRaw as any).default;
    console.log(users);
    this.users = users;
  }

  sendMessage(): void{
    const messageInfo: Message = {
      id: 1,
      type_message: 1,
      user_name: 'Gerson Benito',
      email: 'gersonbenito4@gmail.com',
      message: this.message,
      date: new Date().toLocaleDateString(),
      hour: '12:00 am'
    }

    this._chatSercice.sendMessage(messageInfo);

  }

}
