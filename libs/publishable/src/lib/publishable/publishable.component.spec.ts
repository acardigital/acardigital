import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishableComponent } from './publishable.component';

describe('PublishableComponent', () => {
  let component: PublishableComponent;
  let fixture: ComponentFixture<PublishableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
