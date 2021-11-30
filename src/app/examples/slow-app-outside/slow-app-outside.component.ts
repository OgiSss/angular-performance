import {
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-slow-app-outside',
  templateUrl: './slow-app-outside.component.html',
  styleUrls: ['./slow-app-outside.component.scss'],
})
export class SlowAppOutsideComponent implements OnInit {
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
