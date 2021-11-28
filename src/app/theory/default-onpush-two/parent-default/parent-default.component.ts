import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Counter } from 'src/app/shared/models/counter.interface';

@Component({
  selector: 'app-parent-default',
  templateUrl: './parent-default.component.html',
  styleUrls: ['./parent-default.component.scss'],
})
export class ParentDefaultComponent {
  @Input() counter!: Counter;
  @Output() update: EventEmitter<void> = new EventEmitter();

  onChange() {
    this.update.emit();
  }
}
