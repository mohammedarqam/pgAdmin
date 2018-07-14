import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, IonicPage, AlertController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {

  userRef = firebase.database().ref("Contact Us/");
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
    this.getContacts();
  }
  getContacts(){
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

  deleteAuth(autho) {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure you want to Delete this Complaint ?',
      message: 'This Complaint cannot be recovered again',
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
        this.getContacts();
        this.presentToast();
      }).then(()=>{
        loading.dismiss();
      }) ;
  
  }
  
  
  presentToast() {
  let toast = this.toastCtrl.create({
    message: 'Complaint Deleted',
    duration: 4000,
  });
  toast.present();
  }
  

}