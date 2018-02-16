import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVarsProvider {
  TOKEN: String;
  socket_name: String;
  role: String;
  
  lastName: String;
  firstName: String;
  email: String;

//  MAIN_URL = "http://127.0.0.1:9000";
//  MAIN_URL = "http://192.168.0.15:9000";
//  MAIN_URL = "http://localhost:9000";
  MAIN_URL = "https://adeq.rezoleo.fr";
  
  constructor() {
    console.log('Hello GlobalVarsProvider Provider');
    this.TOKEN = "";
  }

  set_token(token){
    this.TOKEN = token;
  }
  get_token(){
    return this.TOKEN;
  }

  set_socket_name(name){
    this.socket_name = name;
  }
  get_socket_name(){
    return this.socket_name;
  }

  set_role(role){
    this.role = role;
  }
  get_role(){
    return this.role;
  }

  init_glob(res){
    this.set_token(res.token);
    this.set_socket_name(res.room_name);
    this.set_role(res.role);
  }

  set_user_info(data){
    this.email = data.email;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
  }
}
