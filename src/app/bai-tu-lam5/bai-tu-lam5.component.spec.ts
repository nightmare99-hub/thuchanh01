import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTuLam5Component } from './bai-tu-lam5.component';

describe('BaiTuLam5Component', () => {
  let component: BaiTuLam5Component;
  let fixture: ComponentFixture<BaiTuLam5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTuLam5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTuLam5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
