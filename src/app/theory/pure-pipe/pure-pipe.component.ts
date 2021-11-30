import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pure-pipe',
  templateUrl: './pure-pipe.component.html',
  styleUrls: ['./pure-pipe.component.scss'],
})
export class PurePipeComponent implements OnInit {
  items = [
    {
      name: 'Template function',
      image: '/assets/template-func.png',
    },
    {
      name: 'Pure pipe',
      image: '/assets/pure-pipe.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
