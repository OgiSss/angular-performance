import { Component, OnInit } from '@angular/core';
import { Counter } from 'src/app/shared/models/counter.interface';

@Component({
  selector: 'app-default-onpush-two',
  templateUrl: './default-onpush-two.component.html',
  styleUrls: ['./default-onpush-two.component.scss'],
})
export class DefaultOnpushTwoComponent implements OnInit {
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
