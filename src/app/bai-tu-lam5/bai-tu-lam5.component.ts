import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-tu-lam5',
  templateUrl: './bai-tu-lam5.component.html',
  styleUrls: ['./bai-tu-lam5.component.css']
})
export class BaiTuLam5Component implements OnInit {

  constructor() { }
  dayso=[1,2,3,4,5,6,7,8,9,10,11,12];
  kq=" ";
  ngOnInit(): void {
    for(let i=0;i<this.dayso.length;i++){
    let x=Math.trunc(Math.sqrt(this.dayso[i]));
    if(Math.pow(x,2)==this.dayso[i]){
      this.kq=this.kq+this.dayso[i]+" ";
    }
    }
  }

}
