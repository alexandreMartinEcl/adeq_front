import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Socket } from 'ng-socket-io';

import { HomePage } from '../home/home';
import { QuestionsPage } from '../questions/questions';
import { DiscussionPage } from '../discussion/discussion';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = QuestionsPage;
  tab3Root = DiscussionPage;

  home_icon= "ios-home-outline";
  quest_icon = "ios-pizza-outline";
  disc_icon = "ios-chatboxes-outline";

  constructor(public navCtrl: NavController,
              private storage: Storage,
              private socket: Socket) {
  }

  log_out() {
    this.storage.get("logins").then(res => {
      if(res != null){
        console.log("LO: restore autoconnect to false");
        res = JSON.parse(res);
        res.autoconnect = false;
        this.storage.set("logins", JSON.stringify(res));
      }
      console.log("LO: Back to connectionPage");
      this.navCtrl.pop();
    });
    this.socket.removeAllListeners();
    this.socket.disconnect();    
  }

  change_icon(icon){
    switch(icon){
      case "home":
      this.home_icon = this.sel_icon(this.home_icon);
      this.quest_icon = this.unsel_icon(this.quest_icon);
      this.disc_icon = this.unsel_icon(this.disc_icon);      
      break;
      case "quest":
      this.home_icon = this.unsel_icon(this.home_icon);
      this.quest_icon = this.sel_icon(this.quest_icon);
      this.disc_icon = this.unsel_icon(this.disc_icon);      
      break;
      case "disc":
      this.home_icon = this.unsel_icon(this.home_icon);
      this.quest_icon = this.unsel_icon(this.quest_icon);
      this.disc_icon = this.sel_icon(this.disc_icon);      
      break;
    };
  }

  sel_icon(txt){
    if(txt.indexOf("-outline") !== -1){
      return txt.substr(0, txt.length - 8);
    }
    return txt;
  }

  unsel_icon(txt){
    if(txt.indexOf("-outline") === -1){
      return txt + "-outline";
    }
    return txt;
  }

}
