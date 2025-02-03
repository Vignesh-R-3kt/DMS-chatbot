import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChatService } from '../../services/chat.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FilesService } from '../../services/files.service';

@Component({
  selector: 'app-message-input',
  imports: [MatButtonModule, MatIconModule, ReactiveFormsModule],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.scss'
})
export class MessageInputComponent {

  chatForm: FormGroup;
  fileList?: any[];

  constructor(private chatService: ChatService, private router: Router, private fileService: FilesService) {
    this.chatForm = new FormGroup({
      userInput: new FormControl('', [Validators.required])
    })

    this.fileService.getFilesList().subscribe((res: any) => {
      this.fileList = res;
    })
  }

  handleAddNewChat() {
    const { userInput } = this.chatForm.value;
    const inputValue = userInput.trim();
    if (inputValue) {
      this.chatService.addNewChat({
        type: 'user',
        message: inputValue
      });
      this.processUserInput(inputValue)
      this.chatForm.reset();
    }
  }

  processUserInput(userInput: string): void {
    if (userInput.toLowerCase().includes("upload")) {
      this.sendBotMessage('Navigating to file uploading page...');
      setTimeout(() => {
        this.router.navigate(['/file-upload'])
      }, 1000);
    } else if (userInput.toLowerCase().includes("show all documents")) {
      if (!this.fileList?.length) {
        this.sendBotMessage('No files found');
      } else {
        this.fileList?.forEach((file: any, index: number) => {
          this.sendBotMessage(`${index + 1}. ${file.name}`);
        })
      }
    } else if (userInput.toLowerCase().includes("find document")) {
      const documentName = userInput.split(' ').slice(2).join(' ').trim();
      const document = this.fileList?.find((file: any) => file.name.toLowerCase() === documentName.toLowerCase());
      if (document) {
        this.sendBotMessage(`File found :  ${document.name}`);
      } else {
        this.sendBotMessage(`No file found.`);
      }
    } else if (userInput.toLowerCase().includes("delete document")) {
      const documentName = userInput.split(' ').slice(2).join(' ').trim();
      const document = this.fileList?.find((file: any) => file.name.toLowerCase() === documentName.toLowerCase());
      if (document) {
        this.fileService.removeFile(document.name);
        this.sendBotMessage(`Deleted file ${document.name}`);
      } else {
        this.sendBotMessage(`No file found.`);
      }
    } else if (userInput.toLowerCase().includes("download document")) {
      const documentName = userInput.split(' ').slice(2).join(' ');
      const document = this.fileList?.find((file: any) => file.name.toLowerCase() === documentName.toLowerCase());
      if (document) {
        this.fileService.downloadFile(document.name);
        this.sendBotMessage(`Downloading file ${document.name}`);
      } else {
        this.sendBotMessage(`No file found.`);
      }
    } else {
      this.chatService.addNewChat({
        type: 'bot',
        message: 'Command not recognized. Please try again.'
      });
    }
  }


  sendBotMessage(message: string) {
    this.chatService.addNewChat({
      type: 'bot',
      message: message
    });
  }

}
