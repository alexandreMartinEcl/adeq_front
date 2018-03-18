import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { GlobalVarsProvider } from "../global-vars/global-vars";
import { Socket } from 'ng-socket-io';
import 'rxjs/add/operator/map';

@Injectable()
export class DiscManagerProvider {
  main_url = this.globVars.MAIN_URL;
  
  disc_url = this.main_url + "/discussions";
  mess_url = this.main_url + "/discussions/message";
  nsp: object;
  
  constructor(public http: Http,
            private storage: Storage,
            private globVars: GlobalVarsProvider,
            private socket: Socket) {
    console.log('Hello DiscManagerProvider Provider');
  }

  listen_messages(page){
    console.log("LM: opening socket listener");
    this.socket.connect();

    this.globVars.set_socket(this.socket);
    this.globVars.set_discPageOpen(true);
    this.globVars.set_discPage(page);

    this.socket.emit('room', this.globVars.get_socket_name());
    this.socket.on('message', (msgs) => {
      console.log("LM: message received");
      console.log(msgs);
      page.add_last_messages(msgs);
    });
  }

  req_send_msg(msg){
    let token = this.globVars.get_token();
    return this.http.post(this.mess_url,
      {"messages": [msg]},
      {params: {access_token: token}}).map(res => {
      
      console.log(res);
      return res.json();
    });
  }

  req_get_discussion(last_time=null){
    let token = this.globVars.get_token();
    return this.http.get(this.disc_url,
      {params: {access_token: token}}).map(res => {
      
      console.log(res);
      return res.json();
    });
  }
  
  disp_discussion(data, page){
    page.display_messages(data.messages);
  }

  get_disp_online_data(page){
    this.req_get_discussion()
      .subscribe(res => {
        this.disp_discussion(res, page);

        this.store_discussion(res);
      });
  }

  send_msg(msg){
    console.log("SM: on envoie le message");
    this.req_send_msg(msg)
    .subscribe(res =>{
      let oRess = res;//JSON.parse(ress);
      if(oRess.status != "ok"){
        console.log("SM-Async: Erreur de requete");
        alert("Error: could not send message");
      }
      else{
        console.log("SM-Async: Message envoyé");            
      }
    });
  }

  init_discussion(page){
    console.log("ID: debut initialisation discussion");
    this.storage.get('discussion').then(res=>{
      res = res || null;
      console.log("Async-ID: messages de storage");
      console.log(res);

      if(res !== null){
        this.disp_discussion(JSON.parse(res), page);
      }
      this.get_disp_online_data(page);
    });
  }

  store_discussion(discussion){
    this.storage.set("discussion", JSON.stringify(discussion));
  }

  ionViewWillLeave() {
    this.socket.removeAllListeners();
    this.socket.disconnect();
  }
}
