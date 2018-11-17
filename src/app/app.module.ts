import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Home } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    Home
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Home, 
    MyApp
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, StatusBar, SplashScreen]
})
export class AppModule {}
