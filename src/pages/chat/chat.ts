import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  Platform
} from 'ionic-angular';

import {
  AngularFireAuth
} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {
  Facebook
} from '@ionic-native/facebook';
import {
  AngularFireDatabase,
  FirebaseListObservable
} from 'angularfire2/database';


/**
 * Generated class for the ChatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  displayName: string;
  msgVal: string = '';
  items: FirebaseListObservable < any[] > ;
  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private platform: Platform, private fb: Facebook,private  afDB: AngularFireDatabase) {

  }

  ionViewWillEnter() {
    this.afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;
        return;
      }
      this.displayName = user.displayName;
      this.items = this.afDB.list('/messages');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');

  }

  signInWithFacebook() {

    if (this.platform.is('cordova')) {
      return this.fb.login(['email', 'public_profile'])
        .then(res => {
          const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
          return firebase.auth().signInWithCredential(facebookCredential);
        })
        .catch(err => {
          debugger;
          console.error(err)
        })
    } else {
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res))
        .catch(err => {
          console.error(err)
        });
    }
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  chatSend() {
    this.items.push({ message: this.msgVal, name: this.displayName});
    this.msgVal = '';
  }

}
