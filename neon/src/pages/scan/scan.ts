import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BarcodeScanner} from "@ionic-native/barcode-scanner/ngx";

/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  scannedText:string;
  format:string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public barcodeScanner: BarcodeScanner
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
  }

  scan(){
    this.barcodeScanner.scan().then((barcodeData) => {
      if(barcodeData.cancelled) {
        this.setValues("", "(cancelled)")
      }
      else{
        this.setValues(
          barcodeData.text || '',
          barcodeData.format || ''
        );
      }
    }).catch((error)=>{
      this.setValues(`Error ${error}`, "");
      }
    )
  }

  clear(){
    this.setValues("", "");
  }

  setValues(s, f){
    this.scannedText = s;
    this.format = f;
  }
}
