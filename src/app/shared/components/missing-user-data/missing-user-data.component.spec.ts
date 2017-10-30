import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingUserDataComponent } from './missing-user-data.component';

describe('MissingUserDataComponent', () => {
  let component: MissingUserDataComponent;
  let fixture: ComponentFixture<MissingUserDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissingUserDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
