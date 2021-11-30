import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fibonacci } from 'src/app/helpers/fibonacci';

@Component({
  selector: 'app-outside',
  templateUrl: './outside.component.html',
  styleUrls: ['./outside.component.scss'],
})
export class OutsideComponent {
  @ViewChild('loader') loader!: ElementRef;

  fibValue: number = 0;
  intervals!: any;
  rotation: number = 0;
  constructor(private zone: NgZone) {}

  items = [
    {
      name: 'Inside',
      image: '/assets/inside.png',
    },
    {
      name: 'Outside',
      image: '/assets/outside.png',
    },
  ];

  outside() {
    clearInterval(this.intervals);
    this.zone.runOutsideAngular(() => {
      this.intervals = setInterval(() => {
        this.loader.nativeElement.style.transform = `rotate(${++this
          .rotation}deg)`;
      }, 5);
    });
  }

  inside() {
    clearInterval(this.intervals);
    this.intervals = setInterval(() => {
      this.loader.nativeElement.style.transform = `rotate(${++this
        .rotation}deg)`;
    }, 5);
  }

  fibo(value: number) {
    return fibonacci(value);
  }
}
