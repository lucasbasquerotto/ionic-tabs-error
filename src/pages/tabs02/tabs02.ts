import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage({ name: 'tabs02' })
@Component({
	templateUrl: 'tabs02.html'
})
export class Tabs02 {

	public tab1Title = 'Tabs 02 -> Page 04';
	public tab1Root = 'page04';
	public tab1RootParams: any;

	public tab2Title = 'Tabs 02 -> Page 05';
	public tab2Root = 'page05';
	public tab2RootParams: any;

	constructor(
		navParams: NavParams,
	) {
		let params = navParams.data;

		params = params || {};
		params.currentTab = 'tabs02';

		console.log('tabs02 params', params);
		
		this.tab1RootParams = params;
		this.tab2RootParams = params;
	}
}
