import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({ name: 'page01' })
@Component({
	selector: 'page01',
	templateUrl: 'page01.html'
})
export class Page01 {

	public params: any;
	public paramsToSend = { from: 'page01' };

	constructor(
		private navCtrl: NavController,
		navParams: NavParams,
	) {
		this.params = navParams.data;
	}

	public onClick() {
		console.log('go to tabs01 from page01', this.paramsToSend);	
		this.navCtrl.push('tabs01', this.paramsToSend);
	}

}
