import { HttpClient, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'app/config/app.constant';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
export const API_URL = AppConstants.baseURL;


@Injectable({
  providedIn: 'root'
})
export class OthersService {
  permission: any;

  constructor(private http: HttpClient) { }


// getJSON(): Observable<any> {
//   return this.http.get('assets/permissions.json');

// }
getJSON(){
  return this.http.get<any>(`${API_URL}/rest/data/fetchDynamicFieldInfo`);
}

}
