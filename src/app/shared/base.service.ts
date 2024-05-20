import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService <T> {

  basePath: string = `${environment.serverBasePath}`;
  resourceEndpoint: string = '/resources';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http : HttpClient) { }

  // errores
  handleError(error: HttpErrorResponse){
    console.error('An error occurred:', error)

    // errores por defecto
    if (error.error instanceof ErrorEvent) {
      console.error(`An error occurred: ${error.error.message}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.log(`Backend returned core ${error.status}, body was ${error.error}`);
    }
    return throwError(()=> new Error('Something happened with request, please try again later.'));
  }

  // funcion que retorna la ruta de los recursos en el servidor
  private resourcePath(): string {
    return `${this.basePath}${this.resourceEndpoint}`; // concatena lo que esta en basePath y resourceEndpoint
  }

  // obtener tdoos los recursos
  getAll(): Observable<T>{
    return this.http.get<T>(this.resourcePath(), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
