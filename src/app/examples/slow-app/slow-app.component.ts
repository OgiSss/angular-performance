import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slow-app',
  templateUrl: './slow-app.component.html',
  styleUrls: ['./slow-app.component.scss'],
})
export class SlowAppComponent implements OnInit {
  intervals: any;

  @ViewChild('loader') loader!: ElementRef;

  rotation: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.intervals = setInterval(() => {
      this.loader.nativeElement.style.transform = `rotate(${++this
        .rotation}deg)`;
    }, 10);
  }
}
