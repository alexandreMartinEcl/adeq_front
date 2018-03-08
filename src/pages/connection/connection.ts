import { Http } from '@angular/http';
//import { HTTP } from '@ionic-native/http';
import 'rxjs/add/operator/map';

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GlobalVarsProvider } from "../../providers/global-vars/global-vars";
import { Socket } from 'ng-socket-io';
import { AlertController} from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-connection',
  templateUrl: 'connection.html',
})
export class ConnectionPage {
  email_conn: string;
  password_conn: string;
  autoconnect: boolean;

  subs_is_disp: boolean;
  lastName: string;
  firstName: string;
  email_subs: string;
  password_subs: string;
  password2_subs: string;

  main_url = this.globVars.MAIN_URL;  
  auth_url = this.main_url + "/auth";
  subs_url = this.main_url + "/new_user";
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              private alertCtrl: AlertController,
              private http: Http,
              //private http: HTTP,
              private socket: Socket,
              private globVars: GlobalVarsProvider) {
    this.check_storage();
    this.subs_is_disp = false;
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
        if((logins.email_conn == "w848") && (logins.password_conn == "password")){
          observer.next(JSON.parse(JSON.stringify(this.example_good)));                
        }
        else{
          observer.next(JSON.parse(JSON.stringify(this.example_bad)));                
        }
      } 
    );
  }
*/

  req_subs(subs){
    return this.http.post(this.subs_url, subs).map(res => res.json());
  }

  launch_connect(){
    console.log("LC: Try connection");
    let logins = this.make_logins();
    console.log(JSON.stringify(logins));
  
    if((this.email_conn.length > 0) && (this.password_conn.length > 0)){

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
      }, error =>{
        console.log(error);
        alert(JSON.parse(error._body).code);
      });
    }
  }

  launch_subs(){
    console.log("LS: Try subscribing");
    let subs = this.make_subs();
    console.log(JSON.stringify(subs));

    if(subs.error){
      console.log("Erreur déclenchée");
      console.log(subs.error);
      this.password_subs = "";
      this.password2_subs = "";
      let alert = this.alertCtrl.create({
        title: 'Subscribing error',
        subTitle: subs.error,
        buttons: ['Dismiss']
      });
      alert.present();
    }
    else{
      console.log("LS: trying subscribe request");
      this.req_subs(subs).subscribe(res => {
        console.log("Async-LC: Result from connection");
        console.log(res);
        
        if(!res.code){
          console.log("Async-LC: Subscribing accepted");
          let alert = this.alertCtrl.create({
            title: 'Profile waiting to be confirmed',
            subTitle: "An email has been sent to your adress, please confirm your account",
            buttons: ['Dismiss']
          });
          this.disp_subs();
        }
        else{
          console.log("Async-LC: Subscribing refused");
          let alert = this.alertCtrl.create({
            title: 'Profile refused',
            subTitle: res.message,
            buttons: ['Dismiss']
          });
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
        console.log(res);
        this.email_conn = res.email || "";
        this.password_conn = res.password || "";
        this.autoconnect = res.autoconnect || false;
  
        if(res.autoconnect){
          this.launch_connect();
        }
      }
      else{
        console.log("Async-CS: Initialising page.data to ''");
        
        this.email_conn = "";
        this.password_conn = "";
        this.autoconnect = false;
      }
    });
  }

  make_logins(){
    let obj = {"email": this.email_conn,
      "password": this.password_conn,
      "autoconnect": this.autoconnect
    };

    return JSON.parse(JSON.stringify(obj));
  }

  make_subs(){
    let obj = null;
    if(this.lastName.length == 0){
      obj = {"error": "Please fill up family name"};
    }
    else if(this.firstName.length == 0){
      obj = {"error": "Please fill up first name"};
    }
    else if(this.email_subs.length == 0){
      obj = {"error": "Please fill up email"};
    }
    else if(this.password_subs.length == 0){
      obj = {"error": "Please fill up password"};
    }
    else if(this.password_subs !== this.password2_subs){
      obj = {"error": "The passwords are different"};
    }
    else{
      obj = {
        "error": false,
        "lastName": this.lastName,
        "firstName": this.firstName,
        "email": this.email_subs,
        "password": this.password_subs,
        "password2": this.password2_subs,
      };
    }

    return JSON.parse(JSON.stringify(obj));
  }

  disp_subs(){
    console.log("Subscribing menu displayed");
    this.subs_is_disp = !this.subs_is_disp;
  }
}
