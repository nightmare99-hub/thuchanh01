import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTuLam7Component } from './bai-tu-lam7.component';

describe('BaiTuLam7Component', () => {
  let component: BaiTuLam7Component;
  let fixture: ComponentFixture<BaiTuLam7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTuLam7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTuLam7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
