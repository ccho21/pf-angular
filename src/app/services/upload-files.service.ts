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
  private baseUrl = 'http://localhost:5000/api/upload';
  constructor(private http: HttpClient) {}
  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    console.log(file);
    formData.append('avatar', file);

    console.log('### form data', formData);
    const req = new HttpRequest('POST', `${this.baseUrl}/images`, formData, {
      headers: new HttpHeaders({ ContentType: 'multipart/form-data' }),
      reportProgress: true,
      responseType: 'json',
    });
    return this.http.request(req);
  }
  // getFiles(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/upload`);
  // }
}
