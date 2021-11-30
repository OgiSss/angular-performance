import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-slow-app-v-one',
  templateUrl: './slow-app-v-one.component.html',
  styleUrls: ['./slow-app-v-one.component.scss'],
})
export class SlowAppVOneComponent implements OnInit {
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
