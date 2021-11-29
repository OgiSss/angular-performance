import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-mark-for-check',
  templateUrl: './mark-for-check.component.html',
  styleUrls: ['./mark-for-check.component.scss'],
})
export class MarkForCheckComponent implements OnInit {
  counter: number = 0;

  items = [
    {
      name: 'CounterService',
      image: '/assets/counter-service.png',
    },
    {
      name: 'Mark for check',
      image: '/assets/mark-for-check.png',
    },
    {
      name: 'Default',
      image: '/assets/mfc-default.png',
    },
    {
      name: 'OnPush',
      image: '/assets/mfc-push.png',
    },
  ];

  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.counterService.update(++this.counter);
    }, 100);
  }
}
