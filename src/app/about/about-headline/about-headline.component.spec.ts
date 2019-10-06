import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHeadlineComponent } from './about-headline.component';

describe('AboutHeadlineComponent', () => {
  let component: AboutHeadlineComponent;
  let fixture: ComponentFixture<AboutHeadlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutHeadlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
