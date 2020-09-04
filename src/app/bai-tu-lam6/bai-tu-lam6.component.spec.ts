import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTuLam6Component } from './bai-tu-lam6.component';

describe('BaiTuLam6Component', () => {
  let component: BaiTuLam6Component;
  let fixture: ComponentFixture<BaiTuLam6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTuLam6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTuLam6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
