import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Counter } from 'src/app/shared/models/counter.interface';

@Component({
  selector: 'app-parent-push',
  templateUrl: './parent-push.component.html',
  styleUrls: ['./parent-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentPushComponent {
  @Input() counter!: Counter;
  @Output() update: EventEmitter<void> = new EventEmitter();

  onChange() {
    this.update.emit();
  }
}
