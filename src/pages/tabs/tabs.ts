import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ChatPage } from "../chat/chat";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ChatPage;

  constructor() {

  }
}
