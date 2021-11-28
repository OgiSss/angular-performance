import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent {
  @Input() timestamp!: Date;
  @Output() update: EventEmitter<Date> = new EventEmitter<Date>();

  onClick() {
    const date = new Date();
    this.update.emit(date);
  }
}
