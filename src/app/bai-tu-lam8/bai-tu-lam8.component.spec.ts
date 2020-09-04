import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTuLam8Component } from './bai-tu-lam8.component';

describe('BaiTuLam8Component', () => {
  let component: BaiTuLam8Component;
  let fixture: ComponentFixture<BaiTuLam8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTuLam8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTuLam8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
