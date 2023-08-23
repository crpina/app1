import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlfredService } from '../alfred.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {

  me={
    yo:"",
    password:""
  }

  constructor(private router :Router, private alfred: AlfredService ) { 
 
  }

  ngOnInit() {
    
  }

  goTohome(){

   if(this.me.yo=== this.alfred.getNameUsuario() && this.me.password === this.alfred.getPassword() ){

    this.router.navigate(['/home', this.me.yo])
   }

  }

  Recuperar(){

  }


}
