import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  private filesList: any[] = [];
  private files$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() { }

  getFilesList(): Observable<any[]> {
    return this.files$ as Observable<any>;
  }

  addNewData(file: any) {
    this.filesList.push(file);
    this.files$.next(this.filesList);
  }

  removeFile(name: string) {
    this.filesList = this.filesList.filter((file: any) => {
      return file.name !== name;
    });
    this.files$.next(this.filesList);
  }

  downloadFile(name: string) {
    const file = this.filesList.find((file: any) => file.name === name);
    if (file) {
      const downloadBtn: any = document.createElement("a");
      const fileURL = URL.createObjectURL(file);

      downloadBtn.href = fileURL;
      downloadBtn.download = file.name;
      downloadBtn.textContent = file.name;
      downloadBtn.click();
    }
  }
}
