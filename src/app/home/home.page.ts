import { Component } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  modekids = true;
  constructor(public popoverController: PopoverController, public modalController: ModalController) {}
  async settingsPopover(ev: any) {
    // const siteInfo = { id: 1, name: 'edupala' };
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      animated: false,
      cssClass: 'bottom-sheet-popover',
      // componentProps: {
      //   site: siteInfo
      // },
      translucent: true
    });

    popover.onDidDismiss().then((result) => {
      console.log(result.data);
    });

    return await popover.present();
    /** Sync event from popover component */

  }
  
  ablekid(){
    this.modekids = !this.modekids;
    console.log(this.modekids);
  }
  gotomeet(){
    window.open('https://meet.google.com/avm-guoz-pax', '_system');
  }
}
