import { Http } from '@angular/http';
//import { HTTP } from '@ionic-native/http';
import 'rxjs/add/operator/map';

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GlobalVarsProvider } from "../../providers/global-vars/global-vars";
import { Socket } from 'ng-socket-io';

import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-connection',
  templateUrl: 'connection.html',
})
export class ConnectionPage {
  email: string;
  password: string;
  autoconnect: boolean;

  main_url = this.globVars.MAIN_URL;  
  auth_url = this.main_url + "/auth";
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              private http: Http,
              //private http: HTTP,
              private socket: Socket,
              private globVars: GlobalVarsProvider) {
    this.check_storage();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConnectionPage');
  }

  req_auth(logins){
    return this.http.post(this.auth_url, logins).map(res => res.json());//{
//    return this.http.post(this.auth_url, logins).map(res => {
//        console.log(JSON.stringify(res));
//        return res.json();
//    });
  }
/*
    return new Observable(observer => {
        if((logins.email == "w848") && (logins.password == "password")){
          observer.next(JSON.parse(JSON.stringify(this.example_good)));                
        }
        else{
          observer.next(JSON.parse(JSON.stringify(this.example_bad)));                
        }
      }
    );
  }
*/

  launch_connect(){
    console.log("LC: Try connection");
    let logins = this.make_logins();
    console.log(JSON.stringify(logins));
  
    if((this.email.length > 0) && (this.password.length > 0)){

//      this.req_auth(logins).then(res => {
      this.req_auth(logins).subscribe(res => {
        console.log("Async-LC: Result from connection");
        console.log(res);
        
        if(!res.code){
          console.log("Async-LC: Connection accepted: updating storage");
          this.globVars.init_glob(res);
          this.globVars.set_user_info(res);
          this.storage.set("logins", JSON.stringify(this.make_logins()));
          this.navCtrl.push(TabsPage);
        }
        else{
          alert(res.data.message);
        }

      });

    }
  }

  check_storage(){
    console.log("CS: Checking storage");
    this.storage.get("logins").then(res => {
      console.log("Async-CS: Here is logins");
      console.log(res);
      
      if(res != null){
        console.log("Async-CS: Updating page.data");
        res = JSON.parse(res);
        this.email = res.email || "";
        this.password = res.password || "";
        this.autoconnect = res.autoconnect || false;
  
        if(res.autoconnect){
          this.launch_connect();
        }
      }
      else{
        console.log("Async-CS: Initialising page.data to ''");
        
        this.email = "";
        this.password = "";
        this.autoconnect = false;
      }
    });
  }

  make_logins(){
    let obj = {"email": this.email,
                "password": this.password,
                "autoconnect": this.autoconnect
    };

    return JSON.parse(JSON.stringify(obj));
  }
  
}
