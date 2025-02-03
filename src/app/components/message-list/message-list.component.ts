import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-message-list',
  imports: [NgClass],
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.scss'
})
export class MessageListComponent {

  chatIcon: string = 'assets/chat-bot.png';
  userIcon: string = 'assets/icons8-person-80.png'
  chatList: any[] = [
    {
      type: 'user',
      message: 'hello'
    },
    {
      type: 'bot',
      message: 'hello sac asc sc asc asc sac ascs ac hello sac asc sc asc asc sac ascs achello sac asc sc asc asc sac ascs achello sac asc sc asc asc sac ascs achello sac asc sc asc asc sac ascs achello sac asc sc asc asc sac ascs achello sac asc sc asc asc sac ascs achello sac asc sc asc asc sac ascs achello sac asc sc asc asc sac ascs ac'
    },
    {
      type: 'user',
      message: 'o sac asc sc asc asc sac ascs achello sac asc sc asc asc sac ascs achello sac asc sc asc asc sac ascs achello sac asc sc asc asc sac ascs achello sac asc sc asc asc sac ascs'
    },
    {
      type: 'bot',
      message: 'ascjhsa cjas csa csac'
    },
    {
      type: 'user',
      message: 'asc sahcj asckh ascsahc'
    },
    {
      type: 'bot',
      message: 'asc sachascsa casj '
    }
  ]

}
