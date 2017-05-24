import {
  Component
} from '@angular/core';
import {
  NavController,
} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import{ChatPage} from '../chat/chat'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  displayName = '';
  items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,afDB: AngularFireDatabase ) {
  this.items = afDB.list('/links');
  }

  goToChat() {
    console.log('going chat');
    this.navCtrl.push(ChatPage);
  }

}
