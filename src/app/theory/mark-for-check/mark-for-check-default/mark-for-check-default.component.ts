import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-mark-for-check-default',
  templateUrl: './mark-for-check-default.component.html',
  styleUrls: ['./mark-for-check-default.component.scss'],
})
export class MarkForCheckDefaultComponent implements OnInit, OnDestroy {
  private subs = new Subscription();
  count: number = 0;

  constructor(private counterService: CounterService) {}
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
  ngOnInit(): void {
    this.subs.add(
      this.counterService.counter$.subscribe((value) => {
        this.count = value;
      })
    );
  }
}
