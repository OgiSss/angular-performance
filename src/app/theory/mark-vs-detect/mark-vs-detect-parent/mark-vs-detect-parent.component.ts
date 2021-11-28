import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../../mark-for-check/counter.service';

@Component({
  selector: 'app-mark-vs-detect-parent',
  templateUrl: './mark-vs-detect-parent.component.html',
  styleUrls: ['./mark-vs-detect-parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkVsDetectParentComponent implements OnInit, OnDestroy {
  private subs = new Subscription();
  counter: number = 0;
  @Input() isMark: boolean = false;

  constructor(private counterService: CounterService) {}
  ngOnInit(): void {
    this.subs.add(
      this.counterService.counter$.subscribe((value) => {
        this.counter = value;
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
