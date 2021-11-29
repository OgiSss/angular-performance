import { Component, OnInit } from '@angular/core';
import { Counter } from 'src/app/shared/models/counter.interface';

@Component({
  selector: 'app-default-onpush-two',
  templateUrl: './default-onpush-two.component.html',
  styleUrls: ['./default-onpush-two.component.scss'],
})
export class DefaultOnpushTwoComponent {
  counter: Counter = { count: 0 };

  items: Array<{ name: string; image: string }> = [
    { name: 'Component - Default', image: '/assets/increaseByValue.png' },
    { name: 'Component - OnPush', image: '/assets/increaseByRef.png' },
  ];

  increaseByValue() {
    this.counter.count++;
  }

  increaseByReference() {
    this.counter = {
      count: this.counter.count + 1,
    };
  }
}
