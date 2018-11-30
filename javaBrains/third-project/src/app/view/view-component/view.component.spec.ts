import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VuewComponent } from './view.component';

describe('VuewComponent', () => {
  let component: VuewComponent;
  let fixture: ComponentFixture<VuewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VuewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VuewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
