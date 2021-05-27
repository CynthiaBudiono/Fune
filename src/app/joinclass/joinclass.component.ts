import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-joinclass',
  templateUrl: './joinclass.component.html',
  styleUrls: ['./joinclass.component.scss'],
})
export class JoinclassComponent implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  async close(){
    await this.modalController.dismiss();
  }
}
