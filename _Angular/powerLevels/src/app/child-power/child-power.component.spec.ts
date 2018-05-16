import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPowerComponent } from './child-power.component';

describe('ChildPowerComponent', () => {
  let component: ChildPowerComponent;
  let fixture: ComponentFixture<ChildPowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildPowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
