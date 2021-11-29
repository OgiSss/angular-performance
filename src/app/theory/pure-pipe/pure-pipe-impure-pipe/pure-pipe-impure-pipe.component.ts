import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { fibonacci } from 'src/app/helpers/fibonacci';

@Component({
  selector: 'app-pure-pipe-impure-pipe',
  templateUrl: './pure-pipe-impure-pipe.component.html',
  styleUrls: ['./pure-pipe-impure-pipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurePipeImpurePipeComponent implements OnInit {
  list: Array<{ name: string; distance: number }> = DATA;
  constructor() {}
  index = 10;

  ngOnInit(): void {}

  addItem() {
    this.list.push({ name: `river${this.index++}`, distance: this.index });
  }
}

export const DATA = [
  { name: 'river', distance: 32 },
  { name: 'river2', distance: 31 },
  { name: 'river3', distance: 30 },
  { name: 'river4', distance: 29 },
  { name: 'river5', distance: 28 },
  { name: 'river6', distance: 27 },
  { name: 'river7', distance: 26 },
  { name: 'river8', distance: 33 },
  { name: 'river9', distance: 31 },
];
