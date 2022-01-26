import { Component, OnInit } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-prac2',
  templateUrl: './prac2.component.html',
  styleUrls: ['./prac2.component.css']
})
export class Prac2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  prac2title="This is Example of Practices Two";
  todolist:any[
  ]=[];
  addTask(item:string){

    this.todolist.push({id:this.todolist.length,name:item});
    console.warn(this.todolist);
  };
  removeTask(id:number){
    console.warn(id)
    this.todolist=this.todolist.filter(item=>item.id!==id)
  }

}
