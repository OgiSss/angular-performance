import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Counter } from 'src/app/shared/models/counter.interface';

@Component({
  selector: 'app-child-push',
  templateUrl: './child-push.component.html',
  styleUrls: ['./child-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildPushComponent {
  @Input() counter!: Counter;
  @Output() update: EventEmitter<void> = new EventEmitter();

  onChange() {
    this.update.emit();
  }
}
