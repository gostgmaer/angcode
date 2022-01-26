import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Prac1Component } from './prac1/prac1.component';
import { FormsModule } from '@angular/forms';
import { Prac2Component } from './prac2/prac2.component';



@NgModule({
  declarations: [
    Prac1Component,
    Prac2Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    Prac1Component,
    Prac2Component
  ]
})
export class PractModule {
  getsattsd(){

  }
 }
