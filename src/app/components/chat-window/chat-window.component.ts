import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MessageListComponent } from "../message-list/message-list.component";
import { MessageInputComponent } from "../message-input/message-input.component";

@Component({
  selector: 'app-chat-window',
  imports: [MatIconModule, MatButtonModule, RouterLink, MessageListComponent, MessageInputComponent],
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.scss'
})
export class ChatWindowComponent {
  chatIcon: string = 'assets/chat-bot.png';
}
