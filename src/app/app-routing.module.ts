import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultOnpushOneComponent } from './theory/default-onpush-one/default-onpush-one.component';
import { DefaultOnpushTwoComponent } from './theory/default-onpush-two/default-onpush-two.component';
import { TheoryDefaultComponent } from './theory/default/theory-default.component';
import { DetachReattachComponent } from './theory/detach-reattach/detach-reattach.component';
import { MarkForCheckComponent } from './theory/mark-for-check/mark-for-check.component';

const routes: Routes = [
  {
    component: TheoryDefaultComponent,
    path: 'default',
  },
  {
    component: DetachReattachComponent,
    path: 'detach-reattach',
  },
  {
    component: DefaultOnpushOneComponent,
    path: 'default-push',
  },
  {
    component: DefaultOnpushTwoComponent,
    path: 'default-push-two',
  },
  {
    component: MarkForCheckComponent,
    path: 'mark-for-check',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
