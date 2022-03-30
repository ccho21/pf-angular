import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
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

  myfilename!: string;
  selectedFiles!: FileList;

  uploadProgress!: number | undefined;
  uploadSub!: Subscription | undefined;

  myFiles!: string[];

  constructor(private uploadService: UploadFilesService) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    console.log('EVENT## : ', event);
    this.selectedFiles = event.target.files;

    for (var i = 0; i < event.target.files.length; i++) {
      this.myFiles.push(event.target.files[i]);
    }

    this.upload(this.myFiles);
  }

  upload(files?: string[]): void {
    if (files) {
      const upload$ = this.uploadService
        .upload(files)
        .pipe(finalize(() => this.reset()));

      this.uploadSub = upload$.subscribe((event: any) => {
        if (event.type == HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * (event.loaded / event.total));
          // console.log(this.uploadProgress);
          console.log(event);
        }
      });
    }
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
