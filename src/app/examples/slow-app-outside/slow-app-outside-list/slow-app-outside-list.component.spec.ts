import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlowAppOutsideListComponent } from './slow-app-outside-list.component';

describe('SlowAppOutsideListComponent', () => {
  let component: SlowAppOutsideListComponent;
  let fixture: ComponentFixture<SlowAppOutsideListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlowAppOutsideListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlowAppOutsideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
