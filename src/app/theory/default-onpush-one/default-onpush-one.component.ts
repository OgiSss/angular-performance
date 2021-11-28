import { Component, OnInit } from '@angular/core';
import { Counter } from 'src/app/shared/models/counter.interface';

@Component({
  selector: 'app-default-onpush-one',
  templateUrl: './default-onpush-one.component.html',
  styleUrls: ['./default-onpush-one.component.scss'],
})
export class DefaultOnpushOneComponent implements OnInit {
  counter: Counter = { count: 0 };
  constructor() {}

  ngOnInit(): void {}

  increaseByValue() {
    this.counter.count++;
  }

  increaseByReference() {
    this.counter = {
      count: this.counter.count + 1,
    };
  }
}
