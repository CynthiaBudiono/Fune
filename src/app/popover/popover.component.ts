import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { JoinclassComponent } from '../joinclass/joinclass.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  site;

  constructor(
    private popoverController: PopoverController, private router: Router, public modalController: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
    // this.siteInfo = this.navParams.get('site');
    console.log(this.site);
  }
  createroom() {
    // code for setting wifi option in apps
    this.popoverController.dismiss();
    this.router.navigate(["createroom"]);
  }
  joinclass() {
    // code for setting wifi option in apps
    this.popoverController.dismiss();
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: "Room's Code",
      inputs: [
        {
          name: 'kode',
          placeholder: 'ASD12'
        }
      ],
      buttons: ['Join Now']
    });

    await alert.present();
  }

  myclass() {
    // code for setting wifi option in apps
    this.popoverController.dismiss();
    this.router.navigate(["myclass"]);
  }

  logout() {
    // code for logout
    alert("masuk");
    this.popoverController.dismiss();
    this.router.navigate(["/"]);
  }

  eventFromPopover() {
    this.popoverController.dismiss('edupala.com');
  }

}
