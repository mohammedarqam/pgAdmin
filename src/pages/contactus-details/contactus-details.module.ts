import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactusDetailsPage } from './contactus-details';

@NgModule({
  declarations: [
    ContactusDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactusDetailsPage),
  ],
})
export class ContactusDetailsPageModule {}
