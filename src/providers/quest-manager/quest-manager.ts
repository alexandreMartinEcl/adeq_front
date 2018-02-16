//import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { GlobalVarsProvider } from "../global-vars/global-vars";
import 'rxjs/add/operator/map';

@Injectable()
export class QuestManagerProvider {
  main_url = this.globVars.MAIN_URL;
  
  quest_url = this.main_url + "/questions";
  answers_url = this.main_url + "/answers";
  
  constructor(public http: Http,
              private storage: Storage,
              private globVars: GlobalVarsProvider
            ) {
    console.log('Hello QuestManagerProvider Provider');
  }

  get_quests(){
      let token = this.globVars.get_token();
      return this.http.get(this.quest_url,
        {params: {access_token: token}}).map(res => {
        
        console.log(res);
        return res.json();
      });
  }

  put_resp(resp){
    let obj = {"answers": resp};
    let token = this.globVars.get_token();    
    return this.http.put(this.answers_url, obj, {params: {access_token: token}})
      .map(res => {
        
      console.log(res);
      return res.json();
    });
  }

  init_quest_screen(page){
    this.storage.get('quests').then((res)=>{
        if(res != null){
          console.log("I-Async: Quest stored non-null:");
          console.log(res);

          res = JSON.parse(res);
          page.quests = res;
        }
        else{
          console.log("I-Async: Quest stored null");
          page.quests = [];
        }

        this.update_quests(page);
      }
    );
  }

  update_quests(page){
    console.log("UQ: Update quest: ");
    if(page.quests.length < 5){
      console.log("UQ: Quests < 5. On lance la requete.");
      
      this.get_quests()
        .subscribe(res => {
          console.log("UQ-Async: Requete de quest faite:");
          console.log(res);
          console.log("UQ-Async: On concatène toutes les questions")          
          page.quests = page.quests.concat(res);
          console.log(page.quests);
          page.update_curr_quest()
          console.log("UQ-Async: On met a jour toutes les quest a storage");
          this.storage.set('quests', JSON.stringify(page.quests));    
        });
    }
    else{
      page.update_curr_quest();
      console.log("UQ: On met a jour toutes les quest a storage");
      this.storage.set('quests', JSON.stringify(page.quests));    
    }
}

constr_update_storage(id, resp){
  return (res) => {

    console.log("US-ASync: Resultats de get resps:");
    console.log(res);

    if(res != null){
      res = JSON.parse(res);
    }
    else{
      res = {};
    }

    console.log(res);
    console.log("US-Async: On append le nouveau resultat et update storage");      
    res[id] = resp;
    
    if(Object.keys(res).length > 10){
      console.log("US-Async: Resp trop long: on met en ligne");
      this.put_resp(res)
        .subscribe(ress =>{
          let oRess = ress;//JSON.parse(ress);
          if(oRess.status != "ok"){
            console.log("US-Async2: on met a jour resps de storage");
            this.storage.set('resps', JSON.stringify(oRess.responses));
            alert("Error: could not send resp");
          }
          else{
            console.log("US-Async2: Mise en ligne faite, on efface le resp de storage");            
            this.storage.set('resps',"{}");
          }
        });
    }
    else{
      console.log("US-Async: on met a jour resps de storage");
      this.storage.set('resps', JSON.stringify(res));
    }
  }    
}

}
