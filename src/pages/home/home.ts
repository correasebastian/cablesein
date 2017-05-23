import {
  Component
} from '@angular/core';
import {
  NavController,
  Platform
} from 'ionic-angular';


import {
  AngularFireAuth
} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import {
  Facebook
} from '@ionic-native/facebook';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  displayName = '';

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private platform: Platform, private fb: Facebook) {

    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;
        return;
      }
      this.displayName = user.displayName;
    });
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

}
