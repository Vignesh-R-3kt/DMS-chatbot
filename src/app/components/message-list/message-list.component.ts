import { NgClass } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-message-list',
  imports: [NgClass],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss'
})
export class MessageListComponent {
  @ViewChild('chatContainer') chatContainerRef?: ElementRef;

  chatIcon: string = 'assets/chat-bot.png';
  userIcon: string = 'assets/icons8-person-80.png'
  chatList: any[] = []

  constructor(private chatService: ChatService) {
    this.chatService.getChatList().subscribe((res: any[]) => {
      this.chatList = res;
      setTimeout(() => {
        if (this.chatContainerRef?.nativeElement) {
          this.chatContainerRef.nativeElement.scrollTop = this.chatContainerRef.nativeElement.scrollHeight;
        }
      }, 0);
    })
  }


}
