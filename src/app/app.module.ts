import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { TheoryDefaultComponent } from './theory/default/theory-default.component';
import { DefaultComponent } from './shared/default/default.component';
import { CommonModule } from '@angular/common';
import { DetachReattachComponent } from './theory/detach-reattach/detach-reattach.component';
import { DefaultOnpushOneComponent } from './theory/default-onpush-one/default-onpush-one.component';
import { PushComponent } from './shared/push/push.component';
import { DefaultTwoComponent } from './shared/default-two/default-two.component';
import { ParentDefaultComponent } from './theory/default-onpush-two/parent-default/parent-default.component';
import { ParentPushComponent } from './theory/default-onpush-two/parent-push/parent-push.component';
import { ChildDefaultComponent } from './theory/default-onpush-two/child-default/child-default.component';
import { ChildPushComponent } from './theory/default-onpush-two/child-push/child-push.component';
import { DefaultOnpushTwoComponent } from './theory/default-onpush-two/default-onpush-two.component';
import { MarkForCheckComponent } from './theory/mark-for-check/mark-for-check.component';
import { MarkForCheckDefaultComponent } from './theory/mark-for-check/mark-for-check-default/mark-for-check-default.component';
import { MarkForCheckOnpushComponent } from './theory/mark-for-check/mark-for-check-onpush/mark-for-check-onpush.component';
import { MarkVsDetectComponent } from './theory/mark-vs-detect/mark-vs-detect.component';
import { MarkVsDetectDetectComponent } from './theory/mark-vs-detect/mark-vs-detect-detect/mark-vs-detect-detect.component';
import { MarkVsDetectMarkComponent } from './theory/mark-vs-detect/mark-vs-detect-mark/mark-vs-detect-mark.component';
import { MarkVsDetectParentComponent } from './theory/mark-vs-detect/mark-vs-detect-parent/mark-vs-detect-parent.component';
import { OutsideComponent } from './theory/outside/outside.component';
import { PurePipeComponent } from './theory/pure-pipe/pure-pipe.component';
import { PurePipeTemplateFunctionComponent } from './theory/pure-pipe/pure-pipe-template-function/pure-pipe-template-function.component';
import { PurePipePurePipeComponent } from './theory/pure-pipe/pure-pipe-pure-pipe/pure-pipe-pure-pipe.component';
import { PurePipeImpurePipeComponent } from './theory/pure-pipe/pure-pipe-impure-pipe/pure-pipe-impure-pipe.component';
import { PurePipePipe } from './theory/pure-pipe/pipes/pure-pipe.pipe';
import { ImpurePipe } from './theory/pure-pipe/pipes/impure.pipe';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ImagesComponent } from './shared/images/images.component';
import { SlowAppComponent } from './examples/slow-app/slow-app.component';
import { SlowAppListComponent } from './examples/slow-app/slow-app-list/slow-app-list.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SlowAppList2Component } from './examples/slow-app/slow-app-list-2/slow-app-list-2.component';
import { SlowAppOutsideComponent } from './examples/slow-app-outside/slow-app-outside.component';
import { SlowAppVOneComponent } from './examples/slow-app-v-one/slow-app-v-one.component';
import { SlowAppVTwoListComponent } from './examples/slow-app-v-one/slow-app-v-two-list/slow-app-v-two-list.component';
import { SlowAppVOneListComponent } from './examples/slow-app-v-one/slow-app-v-one-list/slow-app-v-one-list.component';
import { SlowAppPurePipeComponent } from './examples/slow-app-pure-pipe/slow-app-pure-pipe.component';
import { SlowAppPurePipeListComponent } from './examples/slow-app-pure-pipe/slow-app-pure-pipe-list/slow-app-pure-pipe-list.component';
import { SlowAppPurePipeListTwoComponent } from './examples/slow-app-pure-pipe/slow-app-pure-pipe-list-two/slow-app-pure-pipe-list-two.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TheoryDefaultComponent,
    DefaultComponent,
    DetachReattachComponent,
    DefaultOnpushOneComponent,
    PushComponent,
    DefaultTwoComponent,
    ParentDefaultComponent,
    ParentPushComponent,
    ChildDefaultComponent,
    ChildPushComponent,
    DefaultOnpushTwoComponent,
    MarkForCheckComponent,
    MarkForCheckDefaultComponent,
    MarkForCheckOnpushComponent,
    MarkVsDetectComponent,
    MarkVsDetectDetectComponent,
    MarkVsDetectMarkComponent,
    MarkVsDetectParentComponent,
    OutsideComponent,
    PurePipeComponent,
    PurePipeTemplateFunctionComponent,
    PurePipePurePipeComponent,
    PurePipeImpurePipeComponent,
    PurePipePipe,
    ImpurePipe,
    ImagesComponent,
    SlowAppComponent,
    SlowAppListComponent,
    SlowAppList2Component,
    SlowAppOutsideComponent,
    SlowAppVOneComponent,
    SlowAppVOneListComponent,
    SlowAppVTwoListComponent,
    SlowAppPurePipeComponent,
    SlowAppPurePipeListComponent,
    SlowAppPurePipeListTwoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,

    //Angular material
    MatSidenavModule,
    MatExpansionModule,
    CdkAccordionModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
