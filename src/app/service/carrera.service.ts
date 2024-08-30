import { Injectable } from '@angular/core';
import { Carrera } from '../model/carrera';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CarreraService {

  carreraApiUrl = '/api/carreras';

  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<Carrera[]> {
    return this.http.get<Carrera[]>(this.carreraApiUrl);
  }

  getAllByName(name: string): Observable<Carrera[]> {
    return this.http.get<Carrera[]>(`${this.carreraApiUrl}?name=${name}`);
  }

  getByRefCode(code: string): Observable<Carrera>{
    return this.http.get<Carrera>(`${this.carreraApiUrl}/${code}`);
  }
  
  createNew(recipe: Carrera): Observable<Carrera>{
    return this.http.post<Carrera>(this.carreraApiUrl, recipe, httpOptions);
  }

  getAllByUser(name: string): Observable<Carrera[]> {
    return this.http.get<Carrera[]>(`${this.carreraApiUrl}/user/${name}`);
  }

  detele(code: string): Observable<any> {
    return this.http.delete<Carrera>(`${this.carreraApiUrl}/${code}`);
  }

  update(recipe: Carrera): Observable<Carrera>{
    return this.http.put<Carrera>(this.carreraApiUrl, recipe, httpOptions);
  }

}
