import { Observable } from 'rxjs/Observable';
import { environment } from './../../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  hasDocumentRegistered(userId): Observable<any> {
    return this.http.get(`${environment.functionsUrl}/checkDocument?uid=${userId}`);
  }
}
