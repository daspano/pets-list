import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPet } from './models/pet.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PetsListService {

  public apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = 'https://petstore.swagger.io/v2/';
  }

  getPetsByStatus(status: string): Observable<IPet[]> {
    return this.http.get<IPet[]>(this.apiUrl + 'pet/findByStatus?status=' + status)
      .pipe(
        map((res: any) => {
          const auxList: IPet[] = [];
          res.forEach((p) => {
            let aux: IPet;
            aux = {
              id: p.id,
              name: p.name,
              status: p.status,
            };
            auxList.push(aux);
          });
          return auxList;
        })
      );
  }
}
