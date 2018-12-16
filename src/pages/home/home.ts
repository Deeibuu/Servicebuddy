import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicelistPage } from '../servicelist/servicelist';
import { NotificationPage } from '../notification/notification';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  

  constructor(public navCtrl: NavController) {

  }

  public gotoServicelist(name: string)  {
    this.navCtrl.push(ServicelistPage, {userName:name});
}
GotoNotification(){
  this.navCtrl.push(NotificationPage);

}
}
