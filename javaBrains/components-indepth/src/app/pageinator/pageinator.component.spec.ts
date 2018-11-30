import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageinatorComponent } from './pageinator.component';

describe('PageinatorComponent', () => {
  let component: PageinatorComponent;
  let fixture: ComponentFixture<PageinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageinatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
