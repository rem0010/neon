import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ScanPage } from '../scan/scan';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }

  goPage(pageName: string){
    switch(pageName){
      case 'scan':
        this.navCtrl.push(ScanPage);
        break;
    }
  }
}
