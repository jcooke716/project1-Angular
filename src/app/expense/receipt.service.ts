import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService {

  constructor(private httpService: HttpClient) { }

  submit(file: File): Observable<HttpEvent<any>>{
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', 'http://localhost:4444/api/files/', formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.httpService.request(req);
  }

  getFiles(): Observable<any> {
    return this.httpService.get('http://localhost:4444/api/files/');
  }

}
