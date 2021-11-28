import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-mark-for-check-onpush',
  templateUrl: './mark-for-check-onpush.component.html',
  styleUrls: ['./mark-for-check-onpush.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarkForCheckOnpushComponent implements OnInit {
  private subs = new Subscription();
  count: number = 0;

  constructor(
    private counterService: CounterService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.subs.add(
      this.counterService.counter$.subscribe((value) => {
        this.count = value;

        if (value % 25 === 0) {
          this.changeDetectorRef.markForCheck();
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
