import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, IonicPage, ToastController, AlertController } from 'ionic-angular';
import * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-authorities',
  templateUrl: 'authorities.html',
})
export class AuthoritiesPage {

  userRef = firebase.database().ref("Authorities/");
  public users: Array<any> = [];
  totUsers: number = 0;


  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public alertCtrl : AlertController,
  public toastCtrl : ToastController,
  public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    this.getauth();
  }
  getauth(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.userRef.once('value', itemSnapshot => {
      this.users = [];
      itemSnapshot.forEach(itemSnap => {
        var temp = itemSnap.val();
        temp.key = itemSnap.key;
        this.users.push(temp);
        this.totUsers = this.users.length;

        return false;
      });
    }).then(()=>{
      loading.dismiss();
    }) ;
  }
newAuth(){
  this.navCtrl.push("AddAuthoritiesPage");
}

deleteAuth(autho) {
  let confirm = this.alertCtrl.create({
    title: 'Are you sure you want to Delete this Authority ?',
    message: 'This Authority cannot be recovered again',
    buttons: [
      {
        text: 'No, Its a mistake',
        handler: () => {

        }
      },
      {
        text: 'Yes, I understand',
        handler: () => {
          this.delete(autho);
        }
      }
    ]
  });
  confirm.present();
}


delete(functionHall) {
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });
  loading.present();

    this.userRef.child(functionHall.key).remove().then(() => {
      this.getauth();
      this.presentToast();
    }).then(()=>{
      loading.dismiss();
    }) ;

}


presentToast() {
let toast = this.toastCtrl.create({
  message: 'Authority Deleted',
  duration: 4000,
});
toast.present();
}


}