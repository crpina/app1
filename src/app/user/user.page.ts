import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  usuario: any;


  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(){
    this.usuario = this.activatedRoute.snapshot.paramMap.get("User")
  }

}
