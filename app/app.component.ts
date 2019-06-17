import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PackagesPage } from '../pages/packages/packages';
import { HistoryOfIOSPage } from '../pages/history-of-ios/history-of-ios';
import { ScenicPage } from '../pages/scenic/scenic';
import { ContactPage } from '../pages/contact/contact';


import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToPackages(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PackagesPage);
  }goToHistoryOfIOS(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HistoryOfIOSPage);
  }goToScenic(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ScenicPage);
  }goToContact(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ContactPage);
  }
}
