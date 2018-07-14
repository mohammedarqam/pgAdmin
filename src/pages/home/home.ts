import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController, AlertController, MenuController, IonicPage } from 'ionic-angular';
import * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  compRef = firebase.database().ref("Complaints/");
  totComp: number = 0;

  authRef = firebase.database().ref("Authorities/");
  totAuth: number = 0;

  contRef = firebase.database().ref("Contact Us/");
  totCont: number = 0;

  userRef = firebase.database().ref("Users/");
  totUser: number = 0;

  constructor(
  public navCtrl: NavController,
  public loadingCtrl : LoadingController,
  private menuCtrl : MenuController) {
    this.menuCtrl.enable(true);
  }

  ionViewDidEnter() {
    this.getNumbers();
  }
  
  getNumbers(){
    //Loading
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
  
    this.authRef.once('value',itemSnapshot=>{
      this.totAuth = itemSnapshot.numChildren();
    });

    this.contRef.once('value',itemSnapshot=>{
      this.totCont = itemSnapshot.numChildren();
    });
    this.userRef.once('value',itemSnapshot=>{
      this.totUser = itemSnapshot.numChildren();
    });

    //getComplaints
    this.compRef.once('value',itemSnapshot=>{
      this.totComp = itemSnapshot.numChildren();
    }).then(()=>{
      loading.dismiss();
    }) ;
    

}
}