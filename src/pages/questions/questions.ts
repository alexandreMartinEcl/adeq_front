import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { QuestManagerProvider } from '../../providers/quest-manager/quest-manager';
import { jsonpFactory } from '@angular/http/src/http_module';
/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
  // question {id: int, title: string, choices: [string], type: string}
  quests: any[];
  id_quest: string;
  title: string;
  choices: [string];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: Storage,
              private qProv: QuestManagerProvider) {
    console.log("I: On commence l'init quest");
    qProv.init_quest_screen(this);
  }

  ionViewDidLoad() {
  }

  make_choice(choice){
    console.log("Choix réalisé");
    this.update_storage_resp(this.id_quest, choice);

    console.log("On enlève la première quest de la liste");
    this.quests.splice(0, 1);
    console.log(this.quests);
    
    this.update_curr_quest();
    this.qProv.update_quests(this);
  }

  update_storage_resp(id, resp){
    console.log("US: On update le storage avec la nouvelle reponse");
    console.log(resp);
    console.log("US: On commence par get resp");
    this.storage.get("resps").then(this.qProv.constr_update_storage(id, resp));
  }

  update_curr_quest(){
    console.log("UC: Update_curr_quests");
    
    let curr_quest = this.quests[0];
    this.id_quest = curr_quest._id;
    this.title = curr_quest.title;
    this.choices = curr_quest.choices;
  }
}
