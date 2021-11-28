import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private _counter = new BehaviorSubject(0);
  counter$ = this._counter.asObservable();

  update(num: number) {
    this._counter.next(num);
  }
}
