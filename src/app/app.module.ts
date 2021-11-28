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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
