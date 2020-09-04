import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai-mau1',
  templateUrl: './bai-mau1.component.html',
  styleUrls: ['./bai-mau1.component.css']
})
export class BaiMau1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let n = 10;
    let s = 0;
    for(let i=1;i<=n;++i){
       s += 1.0/i;
    }
    console.log(s);     
 
  }

}
