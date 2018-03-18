import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';
import { DiscussionPage } from '../../pages/discussion/discussion';
import { Socket } from 'ng-socket-io';
import { ToastController } from 'ionic-angular';

@Injectable()
export class GlobalVarsProvider {
  TOKEN: String;
  socket_name: String;
  role: String;
  
  lastName: String;
  firstName: String;
  email: String;

  connected: Boolean;
  discPageOpen: Boolean;
  discPage: DiscussionPage;
  socket: Socket;

  currentMatch: String;

//  MAIN_URL = "http://127.0.0.1:9000";
//  MAIN_URL = "http://192.168.0.15:9000";
//  MAIN_URL = "http://localhost:9000";
  MAIN_URL = "https://adeq.rezoleo.fr";
  
  constructor(network: Network,
    public toastCtrl: ToastController) {
    console.log('Hello GlobalVarsProvider Provider');
    this.TOKEN = "";
    this.set_discPageOpen(false);

    console.log(`Network state: ${network.type}.`);

    if (network.type === null || network.type !== 'none') {
      this.set_connected(true);
    }

    network.onConnect().subscribe(data => {
      console.log("Network back");
      this.set_connected(true);

      let toast = this.toastCtrl.create({
        message: "You've just got network back.",
        duration: 3000,
        position: 'top',
      });
      toast.present();  

      if (this.discPageOpen) {
        console.log("Network back: opening socket listener");
        this.socket.connect();
        this.socket.emit('room', this.get_socket_name());

        this.socket.on('message', (msgs) => {
          console.log("LM: message received");
          console.log(msgs);
          this.discPage.add_last_messages(msgs);
        });

      }

    }, error => console.error(error));
   
    network.onDisconnect().subscribe(data => {
      console.log("Network lost");
      this.set_connected(false);

      let toast = this.toastCtrl.create({
        message: "You've just lost network.",
        duration: 3000,
        position: 'top',
      });
      toast.present();  

      if (this.discPageOpen) {
        console.log("Network lost: closing socket listener");
        this.socket.removeAllListeners();
        this.socket.disconnect();
      }

    }, error => console.error(error));
  }

  set_token(token){this.TOKEN = token;}
  get_token(){return this.TOKEN;}

  set_socket_name(name){this.socket_name = name;}
  get_socket_name(){return this.socket_name;  }

  set_role(role){this.role = role;}
  get_role(){return this.role;}

  set_lastName(name){this.lastName = name;}
  get_lastName(){return this.lastName;}

  set_firstName(name){this.firstName = name;}
  get_firstName(){return this.firstName;}

  set_email(email){this.email = email;}
  get_email(){return this.email;}

  set_connected(connected){this.connected = connected;}
  get_connected(){return this.connected;}

  set_discPageOpen(open){this.discPageOpen = open;}
  get_discPageOpen(){return this.discPageOpen;}

  set_discPage(page){this.discPage = page;}
  get_discPage(){return this.discPage;}

  set_socket(socket){this.socket = socket;}
  get_socket(){return this.socket;}

  set_currentMatch(match){this.currentMatch = match;}
  get_currentMatch(){return this.currentMatch;}

  init_glob(res){
    this.set_token(res.token);
    this.set_socket_name(res.room_name);
    this.set_role(res.role);
  }

  set_user_info(res){
    this.set_email(res.email);
    this.set_firstName(res.firstName);
    this.set_lastName(res.lastName);
    this.set_currentMatch(res.currentMatch);
  }
}
