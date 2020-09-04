import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTuLam3Component } from './bai-tu-lam3.component';

describe('BaiTuLam3Component', () => {
  let component: BaiTuLam3Component;
  let fixture: ComponentFixture<BaiTuLam3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTuLam3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTuLam3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
