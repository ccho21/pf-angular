import {
  HttpClient,
  HttpEvent,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
HttpHeaders;
@Injectable({
  providedIn: 'root',
})
export class UploadFilesService {
  constructor(private http: HttpClient) {}
  private baseUrl = 'http://localhost:5000';
  // upload(files: string[]): Observable<HttpEvent<any>> {
  upload(files: string[]) {
    const formData: FormData = new FormData();
    
    for (let i = 0; i < files.length; i++) {
      formData.append('images', files[i]);
    }
    // formData.append('images', files);
    formData.forEach((cur) => {
      console.log('###',cur);
    });
    return this.http.post(`${this.baseUrl}/api/upload/images`, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }
  // getFiles(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/upload`);
  // }
}
