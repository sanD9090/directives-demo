import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {
  marks: number = 0;
  color: string;

  change() {
    if (this.marks >= 40) {
      this.color = 'green';
    } else {
      this.color = 'red';
    }
  }

  letter: string;
  x: string;

  class() {
    if (this.letter == 'a') {
      this.x = 'class1';
    } else {
      this.x = 'class2';
    }
  }

  show: boolean;

  check() {
    this.show = !this.show;
  }

  f: boolean;

  g = ['apple', 'banana', 'mango', 'guava'];

  num: number ;
  operations: string[] = ['SQR', 'CUBE'];
  operation: string;

  constructor() {}

  ngOnInit(): void {}
}
