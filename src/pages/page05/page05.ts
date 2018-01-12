import { Component } from '@angular/core';
import { IonicPage, NavParams, App } from 'ionic-angular';

@IonicPage({ name: 'page05' })
@Component({
	selector: 'page05',
	templateUrl: 'page05.html'
})
export class Page05 {

	public params: any;
	public paramsToSend = { from: 'page05' };

	constructor(
		private app: App,
		navParams: NavParams,
	) {
		this.params = navParams.data;
	}

	public onClick() {
		console.log('go to page01 from page05', this.paramsToSend);	
		this.app.getRootNavs()[0].push('page01', this.paramsToSend);
	}

}
