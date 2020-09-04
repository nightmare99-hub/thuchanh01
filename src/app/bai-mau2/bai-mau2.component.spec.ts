import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiMau2Component } from './bai-mau2.component';

describe('BaiMau2Component', () => {
  let component: BaiMau2Component;
  let fixture: ComponentFixture<BaiMau2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiMau2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiMau2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
