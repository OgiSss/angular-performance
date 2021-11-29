import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesComponent implements OnInit {
  @Input() title: string = '';
  @Input() items: Array<{ name: string; image: string }> = [];

  constructor() {}

  ngOnInit(): void {}
}
