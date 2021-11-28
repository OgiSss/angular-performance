import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theory-default',
  templateUrl: './theory-default.component.html',
  styleUrls: ['./theory-default.component.scss'],
})
export class TheoryDefaultComponent implements OnInit {
  timestamp: Date = new Date();

  onUpdate(date: Date) {
    this.timestamp = date;
  }

  ngOnInit() {
    console.log(this.timestamp);
  }
}
