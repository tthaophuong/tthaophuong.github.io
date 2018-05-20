import { Component, ViewChild, Input } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MemberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-member',
  templateUrl: 'member.html',
})
export class MemberPage {  
@ViewChild("input") input;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    let element = document.getElementById("phone");
   
  }
  public event = {
    month: '2018-01-01',
    timeStarts: '00:00'
  }
  phoneNumber: string;
  checkInput(event){

   if(this.input.value.length>11){
     this.input.value=this.input.value.slice(0,11);
    //  console.log(element.innerHTML);
     
   
 }
  }

}


 

