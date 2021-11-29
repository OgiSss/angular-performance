import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultOnpushOneComponent } from './theory/default-onpush-one/default-onpush-one.component';
import { DefaultOnpushTwoComponent } from './theory/default-onpush-two/default-onpush-two.component';
import { TheoryDefaultComponent } from './theory/default/theory-default.component';
import { DetachReattachComponent } from './theory/detach-reattach/detach-reattach.component';
import { MarkForCheckComponent } from './theory/mark-for-check/mark-for-check.component';
import { MarkVsDetectComponent } from './theory/mark-vs-detect/mark-vs-detect.component';
import { OutsideComponent } from './theory/outside/outside.component';
import { PurePipeComponent } from './theory/pure-pipe/pure-pipe.component';

const routes: Routes = [
  {
    component: TheoryDefaultComponent,
    path: 'default',
    pathMatch: 'full',
  },
  {
    component: DetachReattachComponent,
    path: 'reattach',
    pathMatch: 'full',
  },
  {
    component: DefaultOnpushOneComponent,
    path: 'push',
    pathMatch: 'full',
  },
  {
    component: DefaultOnpushTwoComponent,
    path: 'default-push-two',
    pathMatch: 'full',
  },
  {
    component: MarkForCheckComponent,
    path: 'mark-for-check',
    pathMatch: 'full',
  },
  {
    component: MarkVsDetectComponent,
    path: 'mark-vs-detect',
    pathMatch: 'full',
  },
  {
    component: OutsideComponent,
    path: 'outside-angular',
    pathMatch: 'full',
  },
  {
    component: PurePipeComponent,
    path: 'pure-pipe',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
