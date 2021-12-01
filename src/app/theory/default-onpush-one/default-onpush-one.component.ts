import { Component, OnInit } from '@angular/core';
import { Counter } from 'src/app/shared/models/counter.interface';

@Component({
  selector: 'app-default-onpush-one',
  templateUrl: './default-onpush-one.component.html',
  styleUrls: ['./default-onpush-one.component.scss'],
})
export class DefaultOnpushOneComponent {
  counter: Counter = { count: 0 };

  items: Array<{ name: string; image: string }> = [
    { name: 'Component - Default', image: '/assets/default-comp.png' },
    {
      name: 'Component - OnPush',
      image: '/assets/push-comp.png',
    },
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
