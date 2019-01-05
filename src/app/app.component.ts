import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { BookingPage } from '../pages/booking/booking';
import { UpcomingPage } from '../pages/upcoming/upcoming';
import { TicketPage } from '../pages/ticket/ticket';
import { StationsPage } from '../pages/stations/stations';
import { FeedbackPage } from '../pages/feedback/feedback';
import { SettingsPage } from '../pages/settings/settings';
import { HelpPage } from '../pages/help/help';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DashboardPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Book a train', component: DashboardPage },
      { title: 'Upcoming', component: UpcomingPage },
      { title: 'My Trips', component: DashboardPage },
      { title: 'Check Ticket', component: TicketPage },
      { title: 'Stations', component: StationsPage },
      { title: 'Feedback', component: FeedbackPage },
      { title: 'Settings', component: SettingsPage },
      { title: 'Help', component: HelpPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#9E2F2F');
      this.splashScreen.hide();
      
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
