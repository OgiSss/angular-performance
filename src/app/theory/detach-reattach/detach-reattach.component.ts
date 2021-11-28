import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detach-reattach',
  templateUrl: './detach-reattach.component.html',
  styleUrls: ['./detach-reattach.component.scss'],
})
export class DetachReattachComponent implements OnInit {
  autoRefresh: boolean = true;
  value: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.value = this.value + 1;
    }, 100);
  }

  constructor(private changeDetector: ChangeDetectorRef) {}

  onChange() {
    this.autoRefresh = !this.autoRefresh;

    this.autoRefresh
      ? this.changeDetector.reattach()
      : this.changeDetector.detach();
  }
}
