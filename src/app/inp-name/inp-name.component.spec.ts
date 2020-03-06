import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InpNameComponent } from './inp-name.component';

describe('InpNameComponent', () => {
  let component: InpNameComponent;
  let fixture: ComponentFixture<InpNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InpNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InpNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
