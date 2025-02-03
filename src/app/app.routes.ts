import { Routes } from '@angular/router';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';

export const routes: Routes = [
    { path: '', redirectTo: 'file-upload', pathMatch: 'full' },
    { path: 'file-upload', component: FileUploadComponent },
    { path: 'chat-bot', component: ChatWindowComponent }
];
