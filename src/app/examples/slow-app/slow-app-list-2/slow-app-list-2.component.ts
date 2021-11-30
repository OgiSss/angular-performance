import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { fibonacci } from 'src/app/helpers/fibonacci';

@Component({
  selector: 'app-slow-app-list-2',
  templateUrl: './slow-app-list-2.component.html',
  styleUrls: ['./slow-app-list-2.component.scss'],
})
export class SlowAppList2Component {
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

  fibo(value: number) {
    console.log('Second list fibonacci');
    return fibonacci(value);
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
