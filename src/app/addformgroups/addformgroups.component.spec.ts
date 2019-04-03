import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddformgroupsComponent } from './addformgroups.component';

describe('AddformgroupsComponent', () => {
  let component: AddformgroupsComponent;
  let fixture: ComponentFixture<AddformgroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddformgroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddformgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
