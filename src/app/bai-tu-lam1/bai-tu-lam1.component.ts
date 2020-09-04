import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tu-lam1',
  templateUrl: './bai-tu-lam1.component.html',
  styleUrls: ['./bai-tu-lam1.component.css']
})
export class BaiTuLam1Component implements OnInit {

  constructor() { }
  title="Bài 1:  Tính S(n) = x + x^2 + x^3 + … + x^n";
  x=2;
  n=10;
  S=0;
  ngOnInit(): void {
    
    for( let i=1;i<=(this.n);i++){
      this.S=this.S+Math.pow((this.x),(i));
    }
    console.log(this.S);
  }

}
