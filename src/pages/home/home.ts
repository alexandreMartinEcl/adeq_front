import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Connection } from '@angular/http/src/interfaces';

import { HomeManagerProvider } from '../../providers/home-manager/home-manager';
import { GlobalVarsProvider } from "../../providers/global-vars/global-vars";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  surname: String;
  first_name: String;
  email: String;
  birth_date: Date;

  other_first_name: String;
  
  boo_modify_open: Boolean;

  boo_eval_open: Boolean;
  eval_res: Number;
  

  constructor(public navCtrl: NavController,
              private globVars: GlobalVarsProvider,
              private hProv: HomeManagerProvider) {
    this.surname = this.globVars.lastName;
    this.first_name = this.globVars.firstName;
    this.email = this.globVars.email;
    this.other_first_name = "Clitorine";
  }

  traits(){
    return ["Audace", "Exigence", "Respect"];
  }

  other_traits(){
    return ["Sport", "Timidité", "Fan de José Garcia"];
  }

  show_modify(){
    let alert = this.hProv.create_modify_alert(this);

    alert.present().then(() => {
      this.boo_modify_open = true;
    });
  }

  show_modify_mdp(){
    let alert = this.hProv.create_modify_mdp_alert(this);

    alert.present().then(() => {
      this.boo_modify_open = true;
    });
  }

  show_evaluate(){
    let alert = this.hProv.create_eval_alert(this);

    alert.present().then(() => {
      this.boo_eval_open = true;
    });
  }
}
