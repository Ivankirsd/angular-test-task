import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageOneComponent } from './home-page-one.component';

describe('HomePageOneComponent', () => {
  let component: HomePageOneComponent;
  let fixture: ComponentFixture<HomePageOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
