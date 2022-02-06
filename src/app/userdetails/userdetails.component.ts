import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() item:{first_name:string,last_name:string,email:string}={first_name: '',last_name: '',email: ''};

}
