import { Component, OnInit } from '@angular/core';
import { Message } from '@core/models/message.interface';
import { ChatService } from '@modules/chat/services/chat.service';

@Component({
  selector: 'app-chat-layout',
  templateUrl: './chat-layout.component.html',
  styleUrls: ['./chat-layout.component.scss']
})
export class ChatLayoutComponent implements OnInit {

  public message = '';
  // public chat: Array<Message> = [];

  constructor(
    public _chatSercice: ChatService
  ) { 
    console.log(this._chatSercice.chats);
    
  }

  ngOnInit(): void {}

  sendMessage(): void{
    const messageInfo: Message = {
      id: 1,
      user_name: 'Gerson Benito',
      email: 'gersonbenito4@gmail.com',
      message: this.message,
      date: new Date().toLocaleDateString(),
      hour: '12:00 am'
    }

    this._chatSercice.sendMessage(messageInfo);

    // messageInfo.id = 0;
    // messageInfo.user_name = '';
    // messageInfo.email = '';
    // messageInfo.message = '';
    // messageInfo.date = '';
    // messageInfo.hour = '';

  }

}
