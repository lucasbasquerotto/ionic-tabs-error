import { Component } from '@angular/core';
import { App, IonicPage, NavParams } from 'ionic-angular';

@IonicPage({ name: 'page03' })
@Component({
	selector: 'page03',
	templateUrl: 'page03.html'
})
export class Page03 {

	public params: any;
	public paramsToSend = { from: 'page03' };

	constructor(
		private app: App,
		navParams: NavParams,
	) {
		this.params = navParams.data;
	}

	public onClick() {
		console.log('go to tabs02 from page03', this.paramsToSend);	
		this.app.getRootNavs()[0].push('tabs02', this.paramsToSend);
	}

}
