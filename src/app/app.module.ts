import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { BookingPage } from '../pages/booking/booking';
import { PaymentsPage } from '../pages/payments/payments';
import { UpcomingPage } from '../pages/upcoming/upcoming';
import { TicketPage } from '../pages/ticket/ticket';
import { StationsPage } from '../pages/stations/stations';
import { FeedbackPage } from '../pages/feedback/feedback';
import { SettingsPage } from '../pages/settings/settings';
import { HelpPage } from '../pages/help/help';

@NgModule({
  declarations: [
    MyApp,
    DashboardPage,
    BookingPage,
    PaymentsPage,
    UpcomingPage,
    TicketPage,
    StationsPage,
    FeedbackPage,
    SettingsPage,
    HelpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DashboardPage,
    BookingPage,
    PaymentsPage,
    UpcomingPage,
    TicketPage,
    StationsPage,
    FeedbackPage,
    SettingsPage,
    HelpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
