import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketPage } from './ticket';

@NgModule({
  declarations: [
    TicketPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketPage),
  ],
})
export class TicketPageModule {}
