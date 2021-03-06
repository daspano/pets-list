import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { PetsListService } from './pets-list.service';
import { IPet } from './models/pet.model';

@Component({
  selector: 'lib-pets-list',
  templateUrl: './pets-list.component.html',
})
export class PetsListComponent implements OnInit, OnChanges {
  @Input() status: string;
  public pets: IPet[];

  constructor(private petService: PetsListService) {}

  ngOnInit() {}

  ngOnChanges(): void {
    if (this.status !== undefined){
      this.getPets();
    }
  }

  getPets(): void{
    this.petService.getPetsByStatus(this.status)
      .then((data: IPet[]) => (this.pets = data))
      .catch((error) => console.log(error));
  }
}
