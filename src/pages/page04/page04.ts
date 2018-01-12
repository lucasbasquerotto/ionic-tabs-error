import { Component } from '@angular/core';
import { App, IonicPage, NavParams } from 'ionic-angular';

@IonicPage({ name: 'page04' })
@Component({
	selector: 'page04',
	templateUrl: 'page04.html'
})
export class Page04 {

	public params: any;
	public paramsToSend = { from: 'page04' };

	constructor(
		private app: App,
		navParams: NavParams,
	) {
		this.params = navParams.data;
	}

	public onClick() {
		console.log('go to page01 from page04', this.paramsToSend);	
		this.app.getRootNavs()[0].push('page01', this.paramsToSend);
	}

}
