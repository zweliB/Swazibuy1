import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http'; 
import{Observable,throwError} from 'rxjs'
import { catchError } from 'rxjs/operators';

export interface LoginData {
  email: string;
  password: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private apiUrl = 'http://localhost:9999/api/v1/auth/'
  constructor(private http: HttpClient) { }
  login(data:string):Observable<any>{
    // const credentials={username,password}
    return this.http.post(`${this.apiUrl}login`,data).pipe(
      catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('An error occurred. Please try again later.');
  }
}
