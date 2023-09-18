import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HippoComponent } from './hippo.component';

describe('HippoComponent', () => {
  let component: HippoComponent;
  let fixture: ComponentFixture<HippoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HippoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HippoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
