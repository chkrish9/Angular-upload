import { Component } from '@angular/core';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { saveAs } from 'file-saver';
const uri = 'http://localhost:3001/upload';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  uploader: FileUploader = new FileUploader({ url: uri });

  attachmentList: any = [];

  constructor() {
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log(status);
      this.attachmentList.push(JSON.parse(response));
    }
  }
}
