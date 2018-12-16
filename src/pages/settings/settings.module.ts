import { Component} from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage{

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ngOnInit() {
    window.localStorage.setItem('item', 'true');
  }
  //THIS IS THE LINE THAT DID THE TRICK OF SHOWING ION-TOGGLE AS PER item value
  storageStatus: string = window.localStorage.getItem('item');

  updateItem(){
    window.localStorage.setItem('item', this.storageStatus);
    this.presentToast();

  }


    presentToast() {
      console.log("present Toast");
      const toast = this.toastCtrl.create({
      message: 'New Changes Updated',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    

    toast.present();
  }
}