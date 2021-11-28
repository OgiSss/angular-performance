import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Counter } from '../models/counter.interface';

@Component({
  selector: 'app-default-two',
  templateUrl: './default-two.component.html',
  styleUrls: ['./default-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DefaultTwoComponent {
  @Input() counter!: Counter;
}
