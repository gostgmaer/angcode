import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  updatedata() {
    this.data = Math.random();
  }
  title: string = 'KISHOR SARKAR';
  displayval: string = '';
  getdata(val: string) {
    console.warn(val);
    this.displayval = val;
  }
  count = 0;
  counter(tyep: string) {
    tyep === 'add' ? this.count++ : this.count--;
  }

  username: string = 'Kishor';
  propbinding: string = 'Property Binding';
  notwork = true;
  hide = false;

  ifseld: string = 'If Else Condion Example';
  show = 'nas';

  color = 'green';

  switchssss = 'News';
  switchtitle = 'This is Switch case Example Section ';

  dcolor = 'Unknown';

  usr = ['Anshi', 'Kishor', 'newuser', 'Roll', 'Company'];
  usrd = [
    {
      id: 1,
      first_name: 'Bernette',
      last_name: 'Tessington',
      email: 'btessington0@chicagotribune.com',
      gender: 'Female',
      ip_address: '207.236.56.147',
    },
    {
      id: 2,
      first_name: 'Aldon',
      last_name: 'Esp',
      email: 'aesp1@macromedia.com',
      gender: 'Male',
      ip_address: '71.156.33.224',
    },
    {
      id: 3,
      first_name: 'Rafaelita',
      last_name: 'Roylance',
      email: 'rroylance2@illinois.edu',
      gender: 'Non-binary',
      ip_address: '234.52.62.126',
    },
    {
      id: 4,
      first_name: 'Ofelia',
      last_name: 'Scotney',
      email: 'oscotney3@tripod.com',
      gender: 'Female',
      ip_address: '126.247.136.247',
    },
    {
      id: 5,
      first_name: 'Madelena',
      last_name: 'Spragg',
      email: 'mspragg4@webs.com',
      gender: 'Male',
      ip_address: '86.1.130.137',
    },
  ];

  nastedtitle: string = 'This is a Nasted Example';
  nasted = [
    {
      id: 1,
      city: 'Zandak',
      lat: 43.0606276,
      long: 46.459691,
      phone: '307-321-6789',
    },
    {
      id: 2,
      city: 'Chacapalpa',
      lat: -11.72447,
      long: -75.773888,
      phone: '804-195-1514',
    },
    {
      id: 3,
      city: 'Curahkalak Tengah',
      lat: -7.7516,
      long: 114.1829,
      phone: '333-924-5621',
    },
    {
      id: 4,
      city: 'Wengyang',
      lat: 26.893368,
      long: 112.572018,
      phone: '580-638-4667',
    },
    {
      id: 5,
      city: 'Adh Dhayd',
      lat: 25.3148115,
      long: 55.958135,
      phone: '278-835-8435',
    },
    {
      id: 6,
      city: 'Huarancante',
      lat: -15.7304,
      long: -71.5251,
      phone: '287-484-7670',
    },
    {
      id: 7,
      city: 'Várzea Alegre',
      lat: -6.8272076,
      long: -39.2791011,
      phone: '479-585-4839',
    },
    {
      id: 8,
      city: 'San Francisco',
      lat: 20.8965838,
      long: -105.4093552,
      phone: '396-964-2005',
    },
    {
      id: 9,
      city: 'Sidrolândia',
      lat: -20.9306687,
      long: -54.9697212,
      phone: '634-553-3630',
    },
    {
      id: 10,
      city: 'San Diego',
      lat: 32.5746598,
      long: -117.0697958,
      phone: '619-584-1919',
    },
  ];

  stylebunind: string = 'Example of Style Buinding';
  colorg = 'green';
  colora = 'Red';
  bgcolor = 'red';
  bdcolor = '';
  updatecolor() {
    this.colora = 'cyan';
    this.bdcolor = 'green';
  }
  userdata: any = {};
  getDatafield(data: NgForm) {
    console.warn(data);
    this.userdata = data;
  }
  data = 10;
  userdetails = [
    {
      id: 1,
      first_name: 'Sutherland',
      last_name: 'Pittock',
      email: 'spittock0@soundcloud.com',
      gender: 'Genderqueer',
      ip_address: '66.232.221.15',
    },
    {
      id: 2,
      first_name: 'Brocky',
      last_name: 'Slate',
      email: 'bslate1@sun.com',
      gender: 'Male',
      ip_address: '67.131.85.110',
    },
    {
      id: 3,
      first_name: 'Nigel',
      last_name: 'Houston',
      email: 'nhouston2@psu.edu',
      gender: 'Male',
      ip_address: '61.12.233.245',
    },
    {
      id: 4,
      first_name: 'Edward',
      last_name: 'Delve',
      email: 'edelve3@chronoengine.com',
      gender: 'Male',
      ip_address: '72.206.55.94',
    },
  ];


  dataUpdate(item:string){
    console.warn(item)
  }
}
