import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var require: any;
const CobrowseIO = require('cobrowse-sdk-js');
CobrowseIO.license = "h5U9O61S0DG05Q";
CobrowseIO.start()


@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  lable:string[]=['lable3']
  // title:string='';
  currentRoute!:String
  currentFormData:any
  currentForm:any={ 
    mobile:{ lable3:'Mobile Number'},
    email:{ lable3:'Email Id'},
    address:{ lable3:'Residential Address'}
};


  constructor(private route: Router) { }


  ngOnInit(): void {
   this.currentRoute=this.route.url;
   let path=this.currentRoute.split("/")[1]
   this.currentFormData=this.currentForm[path]
  }











  
  ShareCode: any = null;
help() {
  CobrowseIO.client().then(() => {
      CobrowseIO.createSessionCode().then((code: any) => {
        console.log('your code is', code);
        const modldiv = document.getElementById(`myModal`);
        if (modldiv != null) {
          modldiv.style.display = `block`;
        }
        this.ShareCode = code;
      });
    });
}
close() {
  const modldiv = document.getElementById(`myModal`);
  if (modldiv != null) {
    modldiv.style.display = `none`;
  }
}
}
