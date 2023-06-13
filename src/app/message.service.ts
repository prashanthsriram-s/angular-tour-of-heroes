import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class MessageService {
  messages: string[] = [];
  constructor() { }
  addMessage(message: string)
  {
    this.messages.push(message);
  }
  clearMessages(){
    this.messages = [];
  }
}
