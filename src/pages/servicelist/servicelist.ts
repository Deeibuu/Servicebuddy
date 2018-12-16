import { Component,OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-servicelist',
  templateUrl: 'servicelist.html',
})
export class ServicelistPage implements OnInit {
    name: string;
  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ngOnInit(){
    this.name = this.navParams.get('userName');
}
GotoProfile(){
  this.navCtrl.push(ProfilePage)
}
}
