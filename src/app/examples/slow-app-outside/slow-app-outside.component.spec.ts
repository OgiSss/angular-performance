import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlowAppOutsideComponent } from './slow-app-outside.component';

describe('SlowAppOutsideComponent', () => {
  let component: SlowAppOutsideComponent;
  let fixture: ComponentFixture<SlowAppOutsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlowAppOutsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlowAppOutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
