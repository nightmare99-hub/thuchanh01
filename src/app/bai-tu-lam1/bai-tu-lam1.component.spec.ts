import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTuLam1Component } from './bai-tu-lam1.component';

describe('BaiTuLam1Component', () => {
  let component: BaiTuLam1Component;
  let fixture: ComponentFixture<BaiTuLam1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTuLam1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTuLam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
