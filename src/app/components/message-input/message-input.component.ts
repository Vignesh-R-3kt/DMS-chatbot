import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChatService } from '../../services/chat.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-input',
  imports: [MatButtonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.scss'
})
export class MessageInputComponent {

  chatForm: FormGroup;

  constructor(private chatService: ChatService) {
    this.chatForm = new FormGroup({
      userInput: new FormControl('', [Validators.required])
    })
  }

  handleAddNewChat() {
    const { userInput } = this.chatForm.value;
    if (userInput.trim()) {
      this.chatService.addNewChat({
        type: 'user',
        message: userInput.trim()
      });

      this.chatForm.reset();
    }
  }

}
