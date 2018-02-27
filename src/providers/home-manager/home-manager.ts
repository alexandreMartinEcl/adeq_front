import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { GlobalVarsProvider } from "../global-vars/global-vars";

@Injectable()
export class HomeManagerProvider {
  main_url = this.globVars.MAIN_URL;
  
  eval_url = this.main_url + "/evals";
  user_details_url = this.main_url + "/users/details";
  user_pswd_url = this.main_url + "/users/password";
  
  constructor(public http: Http,
              private alert_ctrl: AlertController,
              private globVars: GlobalVarsProvider) {
    console.log('Hello HomeManagerProvider Provider');
  }

  update_details(data){
    let data_up = {
      firstName: data.first_name,
      lastName: data.surname
    };
    let token = this.globVars.get_token();
    console.log("Sending details update");
    return this.http.put(this.user_details_url,
      {to_update: data_up},
      {params: {access_token: token}}).map(res => {
      
      console.log(res);
      return res.json();
    });
  }

  update_password(data){
    let token = this.globVars.get_token();
    console.log("Sending details update");
    return this.http.put(this.user_pswd_url,
      {
        password: data.curr_pswd,
        new_password: data.new_pswd 
      },
      {params: {access_token: token}}).map(res => {
      
      console.log(res);
      return res.json();
    });
  }

  send_eval(mark){
    let token = this.globVars.get_token();
    console.log("Sending eval");
    return this.http.put(this.eval_url,
      {eval: mark},
      {params: {access_token: token}}).map(res => {
      
      return res.json();
    });
  }

  create_eval_alert(page){
    let alert = this.alert_ctrl.create();
    alert.setTitle('Evalue ta relationa avec cette personne');

    for(let i=1; i<=5; i++){
      alert.addInput({
        type: 'radio',
        label: i.toString(),
        value: i.toString(),
        checked: false
      });
    }

    alert.addButton({
      text:'Cancel',
      handler: data =>{
        page.boo_eval_open = false;
        console.log("Eval cancelled");
      }
    });

    alert.addButton({
      text: 'OK',
      handler: data => {
        page.eval_res = Number(data);
        console.log("Eval chosen " + page.eval_res);
        this.send_eval(data).subscribe(res => {
          console.log(res);
          if(res.status === "ok"){
            console.log("Eval posted without error");
          }
          else{
            console.log("Eval not posted: " + res.message);
          }
        });
        page.boo_eval_open = false;
      }
    });

    return alert;
  }

  create_modify_alert(page){
    return this.alert_ctrl.create({
      title: "Modification",
      message: "Change tes coordonnées",
      inputs:[
        {
          name: "surname",
          placeholder: page.surname.toString(),
        },
        {
          name: "first_name",
          placeholder: page.first_name.toString(),
        }
      ],
      buttons:[
        {
          text: 'Annuler',
          handler: data => {
            console.log('Cancel clicked');
            page.boo_modify_open = false;
          }
        },
        {
          text: 'Valider',
          handler: data => {
            console.log('Infos modifiées');
            console.log(data);
            if(page.surname !== data.surname
            || page.first_name !== data.first_name){
              data.surname = data.surname || page.surname;
              data.first_name = data.first_name || page.first_name;
              this.update_details(data).subscribe(res => {
                if(res.status === "ok"){
                  page.surname = data.surname;
                  page.first_name = data.first_name;    
                }
              })
            }
            page.boo_modify_open = false;
          }
        }
      ]
    });
  }

  create_modify_mdp_alert(page){
    return this.alert_ctrl.create({
      title: "Modification MdP",
      message: "Change ton mot de passe",
      inputs:[
        {
          name: "curr_pswd",
          placeholder: "Mot de passe actuel",
          type: "password"
        },
        {
          name: "new_pswd",
          placeholder: "Nouveau mot de passe",
          type: "password"
        },
        {
          name: "new_pswd_2",
          placeholder: "Nouveau mot de passe",
          type: "password"
        }
      ],
      buttons:[
        {
          text: 'Annuler',
          handler: data => {
            console.log('Cancel clicked');
            page.boo_modify_open = false;
          }
        },
        {
          text: 'Valider',
          handler: data => {
            if(data.new_pswd !== data.new_pswd_2){
              console.log("Mdps pas identiques");
            }
            else{
              console.log("Mdp modifié");              
            }

            console.log('Infos modifiées');
            console.log(data);

            this.update_password(data).subscribe(res => {
              if(res.status === "ok"){
                console.log("Password modified with success");    
              }
              else{
                console.log("Problem with updating password: " + res.message);
              }
            })
    
            page.boo_modify_open = false;




            page.boo_modify_open = false;
          }
        }
      ]
    });
  }

}
