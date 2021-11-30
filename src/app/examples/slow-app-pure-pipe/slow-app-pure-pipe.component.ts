import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-slow-app-pure-pipe',
  templateUrl: './slow-app-pure-pipe.component.html',
  styleUrls: ['./slow-app-pure-pipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlowAppPurePipeComponent implements OnInit {
  intervals: any;

  @ViewChild('loader') loader!: ElementRef;

  rotation: number = 0;

  constructor(private zone: NgZone) {}

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.intervals = setInterval(() => {
        this.loader.nativeElement.style.transform = `rotate(${++this
          .rotation}deg)`;
      }, 10);
    });
  }
}
