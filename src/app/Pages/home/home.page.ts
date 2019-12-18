import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public actionRegisterType:ActionSheetController) {}
  async clickRegister(){
    const actionSheet = await this.actionRegisterType.create({
      cssClass:'actionClass',
      header: 'Register Options', 
      buttons: [{
        text: 'Gmail',
        role: 'destructive',
        icon: 'logo-google',
        handler: () => {
          console.log('Funtion  clicked');
        }
      }, {
        text: 'Facebook',
        icon: 'logo-facebook',
        handler: () => {
          console.log('Funtion clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
