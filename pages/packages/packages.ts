import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HistoryOfIOSPage } from '../history-of-ios/history-of-ios';
import { ScenicPage } from '../scenic/scenic';

@Component({
  selector: 'page-packages',
  templateUrl: 'packages.html'
})
export class PackagesPage {

  constructor(public navCtrl: NavController) {
  }
  goToHistoryOfIOS(params){
    if (!params) params = {};
    this.navCtrl.push(HistoryOfIOSPage);
  }goToScenic(params){
    if (!params) params = {};
    this.navCtrl.push(ScenicPage);
  }
}
