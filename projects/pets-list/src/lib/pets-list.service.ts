import { Injectable } from '@angular/core';
import { IPet } from './models/pet.model';

@Injectable({
  providedIn: 'root',
})
export class PetsListService {
  public apiUrl: string;

  constructor() {
    this.apiUrl = 'https://petstore.swagger.io/v2/';
  }

  getPetsByStatus(status: string): Promise<IPet[]> {
     return fetch(this.apiUrl + 'pet/findByStatus?status=' + status)
      .then((res) => res.json())
      .then((res) => {
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
  }
}
