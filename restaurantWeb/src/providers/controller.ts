import { Component } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams } from 'ionic-angular';
export class MemberPage {  

    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    }
    checkIsNumber(text: string): boolean{
      var number = parseInt(text);
      if(number != NaN){
        return true;
      }
      return false;
    }
  }