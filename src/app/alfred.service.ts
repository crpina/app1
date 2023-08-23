import { Injectable } from '@angular/core';

interface Usuario {
  name: String
  password: String
}


@Injectable({
  providedIn: 'root'
})
export class AlfredService {

  constructor() { }


  private usuario: Usuario  = {
    name:"Cristopher",
    password: "123"
  }


  setNameUsuario(inPutName: String){
    this.usuario.name= inPutName;
  }

  getNameUsuario():String{
    return this.usuario.name;
  }

  setPassword(inPutPassword: String){
    this.usuario.password= inPutPassword;
  }

  getPassword():String{
    return this.usuario.password;
  }


}
