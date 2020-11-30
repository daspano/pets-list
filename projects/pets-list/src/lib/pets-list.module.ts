import { NgModule } from '@angular/core';
import { PetsListComponent } from './pets-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [PetsListComponent],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [PetsListComponent]
})
export class PetsListModule { }
