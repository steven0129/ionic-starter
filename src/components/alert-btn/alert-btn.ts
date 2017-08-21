import { Component, Input } from '@angular/core'
import { AlertController, Events } from 'ionic-angular'

@Component({
  selector: 'alert-btn',
  templateUrl: 'alert-btn.html'
})

export class AlertBtnComponent {

  @Input('text') text: string

  constructor(private alertCtrl: AlertController, public events: Events) {
    events.subscribe('presentAlert', (title, subTitle, buttons) => {
      this._presentAlert(title, subTitle, buttons)
    })
  }

  _presentAlert(title, subTitle, buttons) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: buttons
    })

    alert.present()
  }

}
