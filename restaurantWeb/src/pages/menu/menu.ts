import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  number: number = 1;
  // totalBill: number=0;
  // if(number<0) {
  //   return 0;
  // }
  addMeal() {
    this.number++;
    // let element = document.getElementById("result");
    // if(element){
    //   let value = parseInt(element.innerHTML);
    //   console.log(value);
    //   value++;
    //   element.innerHTML = value+"";
    // }

  }
  removeMeal() {
    this.number--;
    if(this.number<=0) return 0;

  }
  bill(){
    let element = document.getElementById("resultLast");
    let quantity = document.getElementById("result").innerHTML;
    let cost = document.getElementById("total").innerHTML;
    if(element){
      let value = parseInt(element.innerHTML); 
      let quantity = parseInt(element.innerHTML); 
      let cost = parseInt(element.innerHTML);  
      console.log(value);
      value= quantity*cost;
      element.innerHTML= value+"";
    }
  }
}
