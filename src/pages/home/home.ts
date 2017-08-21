import { Component } from '@angular/core'
import { Events, NavController } from 'ionic-angular'
import { ContactPage } from '../contact/contact'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  isRound: boolean = true

  constructor(public events: Events, private navCtrl: NavController) {
    events.subscribe('log', (text) => {
      console.log(text)
    })

    events.subscribe('toggleRound', () => {
      this.isRound = !this.isRound
    })
  }

  show(...args) {
    let subTitle = args[0]
    let title = args[1] || 'Warning'
    let buttons = args[2] || ['OK']
    this.events.publish('presentAlert', title, subTitle, buttons)
  }

  page() {
    this.navCtrl.push(ContactPage)
  }

  onClick(event) {
    this.events.publish('toggleRound')
    this.events.publish('log', event)
  }

}
