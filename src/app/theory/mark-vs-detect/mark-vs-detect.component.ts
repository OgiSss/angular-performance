import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CounterService } from '../mark-for-check/counter.service';

@Component({
  selector: 'app-mark-vs-detect',
  templateUrl: './mark-vs-detect.component.html',
  styleUrls: ['./mark-vs-detect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkVsDetectComponent implements OnInit {
  counter: number = 0;
  constructor(private counterService: CounterService) {}

  items = [
    {
      name: 'Child - markForCheck - ASYNC',
      image: '/assets/mark-mark.png',
    },
    {
      name: 'Child - detect changes - SYNC',
      image: '/assets/mark-detect.png',
    },
  ];

  ngOnInit(): void {
    setInterval(() => {
      this.counterService.update(++this.counter);
    }, 100);
  }
}
