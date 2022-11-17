import { Injectable } from '@angular/core';
import { Message } from '@core/models/message.interface';
import { SocketService } from '@core/services/socket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public chats: Array<Message> = [];
  // public chats = new BehaviorSubject<Array<Message>>([]);

  constructor( private _socketService: SocketService ) { 
    this.reciveMessage();
  }

  sendMessage(message: Message): void{
    this.chats.push(message);
    this._socketService.io.emit('sendMessage', message);
  }

  reciveMessage(): void {
    this._socketService.io.on('reciveMessage', (message: Message) =>{
      let reciveMessage = {
        ...message,
        type_message: 2
      }
      this.chats.push(reciveMessage);
    });
  }


}
