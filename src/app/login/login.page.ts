import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {


  clave={
    yo:"a",
    password:"a"
  }

  me={
    yo:"",
    password:""
  }
 

  constructor(private router :Router, ) { 
 
  }

  ngOnInit() {
  }

 
  goTohome(){


   if(this.me.yo===this.clave.yo && this.me.password === this.clave.password){

    this.router.navigate(['/home'])
   } 
   


  }

}
