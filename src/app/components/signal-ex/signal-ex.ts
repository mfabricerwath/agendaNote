import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css',
})
export class SignalEx {
firstName: string="Mugisha";
productName="moto";
courseName = signal<string>("Angular");

courseDuration = signal("15 videos");

courseDetail = computed(()=>this.courseName()+" "+this.courseDuration());

constructor(){
  this.firstName="RAUL"
  console.log(this.courseName())
 
  setTimeout(() => {
     this.courseName.set("Dev with Angular")
  }, 5000);
  console.log(this.firstName)
  console.log(this.courseName())

}

}
