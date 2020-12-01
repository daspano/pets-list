import { NgModule } from '@angular/core';
import { PetsListComponent } from './pets-list.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PetsListComponent],
  imports: [
    CommonModule
  ],
  exports: [PetsListComponent]
})
export class PetsListModule { }
