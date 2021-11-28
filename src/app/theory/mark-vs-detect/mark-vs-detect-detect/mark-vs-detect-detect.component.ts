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
  selector: 'app-mark-vs-detect-detect',
  templateUrl: './mark-vs-detect-detect.component.html',
  styleUrls: ['./mark-vs-detect-detect.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkVsDetectDetectComponent implements OnInit, OnDestroy {
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
          this.changeDetectorRef.detectChanges();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
