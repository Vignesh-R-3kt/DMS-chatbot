import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface Chat {
  type: string,
  message: string
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private chatList: any[] = JSON.parse(localStorage.getItem('chatList') || '[]');

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
