import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { Facebook } from '@ionic-native/facebook';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export const firebaseConfig = {
/*apiKey: "AIzaSyB1Za2wf9IAWLc194nhmrba8E6M8_9sSBU",
authDomain: "tu-documento.firebaseapp.com",
databaseURL: "https://tu-documento.firebaseio.com",
projectId: "tu-documento",
storageBucket: "tu-documento.appspot.com",
messagingSenderId: "872089775365"*/
   apiKey: "AIzaSyCokUd2JNlu0knTUXBDEo60duEbUYpI73g",
    authDomain: "cablesein.firebaseapp.com",
    databaseURL: "https://cablesein.firebaseio.com",
    projectId: "cablesein",
    storageBucket: "cablesein.appspot.com",
    messagingSenderId: "508018682355"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
