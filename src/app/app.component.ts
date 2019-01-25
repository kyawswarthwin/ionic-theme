import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

import { SideMenuOptions } from 'ionic-side-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options: SideMenuOptions = {
    menus: [
      {
        items: [
          {
            title: 'Settings',
            path: '/settings'
          }
        ]
      }
    ]
  };

  constructor(private platform: Platform, private splashScreen: SplashScreen) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }
}
