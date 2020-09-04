import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTuLam2Component } from './bai-tu-lam2.component';

describe('BaiTuLam2Component', () => {
  let component: BaiTuLam2Component;
  let fixture: ComponentFixture<BaiTuLam2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTuLam2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTuLam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
