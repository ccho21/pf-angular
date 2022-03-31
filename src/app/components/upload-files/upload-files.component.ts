import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UploadFilesService } from '@app/services/upload-files.service';
import { finalize, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.scss'],
})
export class UploadFilesComponent implements OnInit {
  @Input() requiredFileType!: string;
  @Output() imageEmit = new EventEmitter<Array<string>>();

  myfilename!: string;
  selectedFiles!: FileList;

  uploadProgress!: number | undefined;
  uploadSub!: Subscription | undefined;

  myFiles!: FileList;

  constructor(private uploadService: UploadFilesService) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
    console.log('EVENT## : ', this.selectedFiles);

    for (let i = 0; i < event.target.files.length; i++) {
      // this.myFiles.push(event.target.files[i]);
      console.log(event.target.files[i]);
    }

    this.upload(this.selectedFiles);
  }

  upload(files?: FileList): void {
    if (files) {
      const upload$ = this.uploadService.upload(files).pipe(
        finalize(() => {
          console.log('Update Finalize');
          this.reset();
        })
      );

      this.uploadSub = upload$.subscribe((event: any) => {
        console.log('###event :', event);
        if (event.body) {
          this.getImagUrls(event.body.imagePath);
        }
        if (event.type == HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * (event.loaded / event.total));
          // console.log(this.uploadProgress);
        }
      });
    }
  }

  getImagUrls(urls: Array<string>) {
    this.imageEmit.emit(urls);
  }

  cancelUpload() {
    this.uploadSub?.unsubscribe();
    this.reset();
  }

  reset() {
    this.uploadProgress = undefined;
    this.uploadSub = undefined;
  }
}
