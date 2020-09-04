import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTuLam4Component } from './bai-tu-lam4.component';

describe('BaiTuLam4Component', () => {
  let component: BaiTuLam4Component;
  let fixture: ComponentFixture<BaiTuLam4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTuLam4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTuLam4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
