import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { fibonacci } from 'src/app/helpers/fibonacci';

@Component({
  selector: 'app-slow-app-pure-pipe-list',
  templateUrl: './slow-app-pure-pipe-list.component.html',
  styleUrls: ['./slow-app-pure-pipe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlowAppPurePipeListComponent {
  list: Array<{ name: string; distance: number; index: number }> = [];
  data: Array<{ name: string; distance: number; index: number }> = [];
  searchValue: string = '';

  constructor() {
    for (let index = 0; index < 25; index++) {
      const dist = index > 30 || index < 10 ? 30 : index;
      this.data.push({ name: `river${index}`, distance: dist, index });
    }

    this.list = this.data.map((item) => ({ ...item }));
  }

  search(value: string) {
    if (value === '') {
      this.list = this.data.filter((item) => item);
    } else {
      this.list = this.data.filter(
        (item) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1
      );
    }
  }
}
