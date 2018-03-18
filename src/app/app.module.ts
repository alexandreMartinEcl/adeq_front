import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
//const MAIN_URL = "http://localhost:9000";
const MAIN_URL = "https://adeq.rezoleo.fr";
const config: SocketIoConfig = { url: `${MAIN_URL}/discussions`, options:{}};
import { HTTP } from '@ionic-native/http';

import { HomePage } from '../pages/home/home';
import { QuestionsPageModule } from '../pages/questions/questions.module';
import { DiscussionPageModule } from '../pages/discussion/discussion.module';
import { TabsPage } from '../pages/tabs/tabs';
import { ConnectionPageModule } from '../pages/connection/connection.module';
import { Network } from '@ionic-native/network';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QuestManagerProvider } from '../providers/quest-manager/quest-manager';
import { DiscManagerProvider } from '../providers/disc-manager/disc-manager';
import { GlobalVarsProvider } from '../providers/global-vars/global-vars';
import { HomeManagerProvider } from '../providers/home-manager/home-manager';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    SocketIoModule.forRoot(config),
    ConnectionPageModule,
    QuestionsPageModule,
    DiscussionPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuestManagerProvider,
    DiscManagerProvider,
    GlobalVarsProvider,
    HomeManagerProvider,
    HTTP,
    Network,
  ]
})
export class AppModule {}
