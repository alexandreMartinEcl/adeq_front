import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiscManagerProvider } from '../../providers/disc-manager/disc-manager';
import { GlobalVarsProvider } from "../../providers/global-vars/global-vars";


@IonicPage()
@Component({
  selector: 'page-discussion',
  templateUrl: 'discussion.html',
})
export class DiscussionPage {
  name: string;
  messages: any[];
  curr_message: string;
  last_req_time: Date;
  role: String;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dProv: DiscManagerProvider,
              private globVars: GlobalVarsProvider) {
    this.dProv.init_discussion(this);
    this.dProv.listen_messages(this);
    this.role = globVars.role;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiscussionPage');
  }

  display_name(name){
    this.name = name;
  }

  add_last_messages(messages){
    console.log("Update-online: messages to add");
    console.log(messages);
        
    let msgs = this.messages;
    msgs = msgs.concat(messages);
    this.display_messages(msgs);
    this.dProv.store_discussion(this.obj_discussion());
  }

  display_messages(messages=null){
    messages = messages || this.messages || null;

    console.log("DM: messages to sort");
    console.log(messages);
    
    if(messages != null){
      messages.sort(function(a, b) {
        return (a.time > b.time) ? 1 : -1;
      });
      console.log(messages);

      this.messages = messages;
    }
  }

  send_message(){
    console.log("Message envoyé: " + this.curr_message);

    let new_mess = {
      "content": this.curr_message,
      "time": Date.now(),
      "type": this.role
    }

//    this.messages.push(new_mess);
//    this.display_messages();
//    this.dProv.store_discussion(this.obj_discussion());
    this.dProv.send_msg(new_mess);
    this.curr_message = "";
  }

  obj_discussion(){
    return this.make_obj_discussion(
      this.name,
      this.messages);
  }
  
  make_obj_discussion(name, messages){
    return {
      "name": name,
      "messages": messages
    }
  }

  get_type(type){
    if(type == this.role){
      return "host";
    }
    else{
      return "guest";
    }
  }
}
