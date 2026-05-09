import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: String=" Angular 20 tutorial";
  productPrice: number=2000;

  maxlenght: number=5;
  minlenght: number=3;
  inputType: String="text"
  textColor: String="myColor"

  constructor(){
  }
}
