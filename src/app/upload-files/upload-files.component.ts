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
  files!: File[];
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  fileInfos?: Observable<any>;

  uploadProgress!: number | undefined;
  uploadSub!: Subscription | undefined;

  myFiles: string[] = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private uploadService: UploadFilesService
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
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
          // console.log(event);

          this.uploadProgress = Math.round(100 * (event.loaded / event.total));
          console.log(this.uploadProgress);
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
