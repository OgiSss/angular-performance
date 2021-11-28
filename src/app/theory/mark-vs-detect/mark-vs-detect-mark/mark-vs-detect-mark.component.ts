import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../../mark-for-check/counter.service';

@Component({
  selector: 'app-mark-vs-detect-mark',
  templateUrl: './mark-vs-detect-mark.component.html',
  styleUrls: ['./mark-vs-detect-mark.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkVsDetectMarkComponent implements OnInit, OnDestroy {
  private subs = new Subscription();
  counter: number = 0;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private counterService: CounterService
  ) {}

  ngOnInit(): void {
    this.subs.add(
      this.counterService.counter$.subscribe((result) => {
        this.counter = result;

        if (result % 10 === 0) {
          this.changeDetectorRef.markForCheck();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
