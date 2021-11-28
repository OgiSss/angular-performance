import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-mark-for-check',
  templateUrl: './mark-for-check.component.html',
  styleUrls: ['./mark-for-check.component.scss'],
})
export class MarkForCheckComponent implements OnInit {
  counter: number = 0;
  constructor(private counterService: CounterService) {}

  ngOnInit(): void {
    setInterval(() => {
      this.counterService.update(++this.counter);
    }, 100);
  }
}
