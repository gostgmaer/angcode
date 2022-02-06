import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataupdate',
  templateUrl: './dataupdate.component.html',
  styleUrls: ['./dataupdate.component.css']
})
export class DataupdateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  data:string="x";
  updateData(item:string){
    console.warn(item);
    this.data=item;
  }

}
