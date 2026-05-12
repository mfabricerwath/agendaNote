import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  startMonthName:string="feb";
  cities:string[]=["Bujumbura","Gitega","Ngozi","Kayanza","Muyinga","Ruyigi"];
  
  student:any[]=[
    {name:"Mugisha",country:"Burundi",degree:"Master",status:true},
    {name:"Nahimana",country:"Rwanda",degree:"Bachelor",status:true},
    {name:"Anaelle",country:"Burundi",degree:"Primary",status:false},
    {name:"Logan",country:"Burundi",degree:"kindergarden",status:true}
  ]
  
  isPagraphVisible: boolean = false;
  showP() {
    this.isPagraphVisible = true;
  }
  hideP() {
    this.isPagraphVisible = false;
  }


}
