import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplaintDetailsPage } from './complaint-details';

@NgModule({
  declarations: [
    ComplaintDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ComplaintDetailsPage),
  ],
})
export class ComplaintDetailsPageModule {}
