import { Component } from '@angular/core';
import { App, IonicPage, NavParams } from 'ionic-angular';

@IonicPage({ name: 'page02' })
@Component({
	selector: 'page02',
	templateUrl: 'page02.html'
})
export class Page02 {

	public params: any;
	public paramsToSend = { from: 'page02' };

	constructor(
		private app: App,
		navParams: NavParams,
	) {
		this.params = navParams.data;
	}

	public onClick() {
		console.log('go to tabs02 from page02', this.paramsToSend);	
		this.app.getRootNavs()[0].push('tabs02', this.paramsToSend);
	}

}
