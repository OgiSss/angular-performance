import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Counter } from 'src/app/shared/models/counter.interface';

@Component({
  selector: 'app-child-default',
  templateUrl: './child-default.component.html',
  styleUrls: ['./child-default.component.scss'],
})
export class ChildDefaultComponent {
  @Input() counter!: Counter;
  @Output() update: EventEmitter<void> = new EventEmitter();

  onChange() {
    this.update.emit();
  }
}
