import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import * as firebase from 'firebase';





@IonicPage()
@Component({
  selector: 'page-complaint-details',
  templateUrl: 'complaint-details.html',
})
export class ComplaintDetailsPage {

  userRef = firebase.database().ref("Complaints/");
  user = this.navParams.get('user')

  constructor(
  public navCtrl: NavController,
  public loadingCtrl : LoadingController,
  public alertCtrl : AlertController,
  public toastCtrl : ToastController, 
  public navParams: NavParams) {
  }

  ionViewDidEnter(){
    console.log(this.user);
  }
  


  deleteAuth() {
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
            this.delete();
          }
        }
      ]
    });
    confirm.present();
  }
  
  
  delete() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
  
      this.userRef.child(this.user.key).remove().then(() => {
        this.navCtrl.setRoot("ComplaintsPage");
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
