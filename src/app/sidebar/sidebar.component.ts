import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  items = [
    { title: 'Intro', links: [] },
    {
      title: 'Theory',
      links: [
        { path: '/default', name: 'Default' },
        { path: '/detach-reattach', name: 'Detach & Reattach' },
        { path: '/default-push', name: 'Default vs push' },
        { path: '/default-push-two', name: 'Default vs push II ' },
        { path: '/mark-for-check', name: 'Mark for check' },
        { path: '/mark-vs-detect', name: 'Mark for check vs detect changes' },
        { path: '/outside-angular', name: 'Run outside Angular' },
      ],
    },
    { title: 'Example', links: [] },
    { title: 'BONUS', links: [] },
  ];

  expandedIndex = 0;
}
