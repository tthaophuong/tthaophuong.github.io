import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { MemberPage } from '../member/member';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
moveMenu(){
  this.navCtrl.push("MenuPage");
}
moveMember(){
  this.navCtrl.push("MemberPage");
}
moveIntroduce(){
  this.navCtrl.push("IntroducePage");
}
}
