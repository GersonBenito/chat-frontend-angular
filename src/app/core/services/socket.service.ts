import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  public io = io(env.baseUrl, {
    withCredentials: true,
    autoConnect: true,
  });

  constructor() { }
}
