import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthoritiesPage } from './authorities';

@NgModule({
  declarations: [
    AuthoritiesPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthoritiesPage),
  ],
})
export class AuthoritiesPageModule {}
