import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ConnectionPage } from '../pages/connection/connection';
import { Connection } from '@angular/http/src/interfaces';
import { PushNotificationsService } from 'ng-push';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any;// = ConnectionPage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private notif: PushNotificationsService) {
    this.rootPage = ConnectionPage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.rootPage = ConnectionPage;
      statusBar.styleDefault();
      splashScreen.hide();
      this.pushInit();
    });

  }

  pushInit(){
    this.notif.requestPermission();
    this.notif.create('Test', {body: 'something'}).subscribe(
      res => console.log(res),
      err => console.log(err)
  )
  }

}
