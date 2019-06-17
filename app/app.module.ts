import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PackagesPage } from '../pages/packages/packages';
import { ContactPage } from '../pages/contact/contact';
import { HistoryOfIOSPage } from '../pages/history-of-ios/history-of-ios';
import { ScenicPage } from '../pages/scenic/scenic';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PackagesPage,
    ContactPage,
    HistoryOfIOSPage,
    ScenicPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PackagesPage,
    ContactPage,
    HistoryOfIOSPage,
    ScenicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}