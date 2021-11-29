import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theory-default',
  templateUrl: './theory-default.component.html',
  styleUrls: ['./theory-default.component.scss'],
})
export class TheoryDefaultComponent {
  timestamp: Date = new Date();

  items: Array<{ name: string; image: string }> = [
    { name: '', image: '/assets/default-component.png' },
  ];

  onUpdate(date: Date) {
    this.timestamp = date;
  }
}
