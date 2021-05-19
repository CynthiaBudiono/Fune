import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  site;

  constructor(
    private popoverController: PopoverController, private router: Router) { }

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
    this.router.navigate(["joinclass"]);
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
