import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroducePage } from './introduce';

@NgModule({
  declarations: [
    IntroducePage,
  ],
  imports: [
    IonicPageModule.forChild(IntroducePage),
  ],
})
export class IntroducePageModule {}
