import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Chat {
  type: string,
  message: string
}

const exisitingChat = [
  {
    type: 'bot',
    message: "Hello, I'm your Chatbot. Here are the commands I can assist you with",
  },
  {
    type: 'bot',
    message: "upload document",
  },
  {
    type: 'bot',
    message: "show all documents",
  },
  {
    type: 'bot',
    message: "find document document_name",
  },
  {
    type: 'bot',
    message: "download document document_name",
  },
  {
    type: 'bot',
    message: "delete document document_name",
  }
]

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatList: any[] = JSON.parse(localStorage.getItem('chatList') || JSON.stringify(exisitingChat));

  private chats$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(this.chatList);

  constructor() { }

  getChatList(): Observable<any[]> {
    return this.chats$ as Observable<any[]>;
  }

  addNewChat(chat: Chat) {
    this.chatList.push(chat);
    this.chats$.next(this.chatList);
    this.setStorage();
  }

  private setStorage() {
    localStorage.setItem('chatList', JSON.stringify(this.chatList));
  }
}
