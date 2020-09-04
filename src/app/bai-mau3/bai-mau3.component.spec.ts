import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiMau3Component } from './bai-mau3.component';

describe('BaiMau3Component', () => {
  let component: BaiMau3Component;
  let fixture: ComponentFixture<BaiMau3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiMau3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiMau3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
