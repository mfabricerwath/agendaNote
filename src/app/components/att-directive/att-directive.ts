import {
  NgClass,
  NgStyle,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
  JsonPipe,
  DatePipe,
} from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass, NgStyle, UpperCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
})
export class AttDirective
  implements
    OnInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  firstName: string = 'Fabrice';
  courseName: string = 'Angular Developpement course';
  bgClassName = signal<string>('');
  isDiv2Green: boolean = false;

  NumbersList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  studentsList: { id: number; name: string }[] = [
    { id: 1, name: 'Fabrice' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' },
    { id: 4, name: 'Charlie' },
    { id: 5, name: 'David' },
  ];
  currentDate: Date = new Date();

  setbgclass(className: string) {
    this.bgClassName.set(className);
  }

  toggleDiv2Color() {
    this.isDiv2Green = !this.isDiv2Green;
  }

  ngOnInit(): void {
    console.log('AttDirective ngOnInit called');
  }
  ngAfterContentInit(): void {
    console.log('AttDirective ngAfterContentInit called');
  }
  ngAfterViewChecked(): void {
    console.log('AttDirective ngAfterViewChecked called');
  }
  ngAfterViewInit(): void {
    console.log('AttDirective ngAfterViewInit called');
  }
  ngOnDestroy(): void {
    console.log('AttDirective ngOnDestroy called');
  }
  ngAfterContentChecked(): void {
    console.log('AttDirective ngAfterContentChecked called');
  }
  constructor() {
    console.log('AttDirective constructor called');
  }
}
