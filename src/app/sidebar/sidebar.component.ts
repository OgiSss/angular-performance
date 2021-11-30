import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
  items = [
    {
      title: 'Theory',
      links: [
        { path: '/default', name: 'Default' },
        { path: '/reattach', name: 'Detach & Reattach' },
        { path: '/push', name: 'Default vs push' },
        { path: '/default-push-two', name: 'Default vs push II ' },
        { path: '/mark-for-check', name: 'Mark for check' },
        { path: '/mark-vs-detect', name: 'Mark for check vs detect changes' },
        { path: '/outside-angular', name: 'Run outside Angular' },
        { path: '/pure-pipe', name: 'Pure pipe' },
        { path: '/slow-app', name: 'Slow application' },
        { path: '/slow-app-outside', name: 'Slow application outside' },
        { path: '/isolated-cd', name: 'Isolated change detector' },
        { path: '/final', name: 'Slow app with Pure pipe' },
      ],
    },
    // { title: 'Example', links: [] },
    // { title: 'BONUS', links: [] },
  ];

  expandedIndex = 0;
}
