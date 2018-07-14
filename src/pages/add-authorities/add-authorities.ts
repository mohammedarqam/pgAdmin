import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import  * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-add-authorities',
  templateUrl: 'add-authorities.html',
})
export class AddAuthoritiesPage {

  Name : string;

  constructor(
  public navCtrl: NavController,
  public loadingCtrl : LoadingController, 
  public navParams: NavParams) {
  }

save(){
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });
  loading.present();
  firebase.database().ref("Authorities").push({Name : this.Name} ).then(()=>{
    this.navCtrl.setRoot("AuthoritiesPage");
  })
}
}
