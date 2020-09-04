import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiMau1Component } from './bai-mau1.component';

describe('BaiMau1Component', () => {
  let component: BaiMau1Component;
  let fixture: ComponentFixture<BaiMau1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiMau1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiMau1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
