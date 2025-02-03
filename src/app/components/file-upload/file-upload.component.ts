import { NgClass } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FilesService } from '../../services/files.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  imports: [MatButtonModule, NgClass, MatSnackBarModule, MatIconModule, RouterLink],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  @ViewChild('uploadInput') inputRef?: ElementRef;
  chatIcon: string = 'assets/chat-bot.png';
  uploadedItem?: any;
  filesList: any[] = [];
  files: any = []

  constructor(private snackbar: MatSnackBar, private filesService: FilesService) {
    filesService.getFilesList().subscribe((res: any) => {
      this.filesList = res;
    })
  }

  handleFileRemoval(name: string) {
    this.filesService.removeFile(name);
  }

  handleAddNewFile() {
    this.filesService.addNewData(this.uploadedItem);
    this.clearInputfield();
  }

  handleFileInput(e: Event) {
    const inputValue = (e.target as HTMLInputElement).files;
    if (inputValue && inputValue.length) {
      const file: any = inputValue[0];
      const allowedExtensions = ["pdf", "docx", "jpg", "jpeg", "png"];
      const fileExtension = file.name.split(".").pop().toLowerCase();

      if (!allowedExtensions.includes(fileExtension)) {
        this.snackbar.open('Invalid file type! Please upload a PDF, DOCX, or an image file.', 'dismiss')
      } else {
        this.uploadedItem = file;
      }
    }
  }


  clearInputfield() {
    this.uploadedItem = '';
    if (this.inputRef?.nativeElement) {
      this.inputRef.nativeElement.value = '';
    }
  }

  handleDownloadFile(name: string) {
    this.filesService.downloadFile(name);
  }

}
