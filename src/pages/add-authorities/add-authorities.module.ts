import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAuthoritiesPage } from './add-authorities';

@NgModule({
  declarations: [
    AddAuthoritiesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAuthoritiesPage),
  ],
})
export class AddAuthoritiesPageModule {}
