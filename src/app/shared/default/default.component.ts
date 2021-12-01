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

  onClick() {}

  date() {
    return new Date();
  }
}
