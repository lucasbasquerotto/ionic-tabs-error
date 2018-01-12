import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage({ name: 'tabs01' })
@Component({
	templateUrl: 'tabs01.html'
})
export class Tabs01 {

	public tab1Title = 'Tabs 01 -> Page 02';
	public tab1Root = 'page02';
	public tab1RootParams: any;

	public tab2Title = 'Tabs 01 -> Page 03';
	public tab2Root = 'page03';
	public tab2RootParams: any;

	constructor(
		navParams: NavParams,
	) {
		let params = navParams.data;

		params = params || {};
		params.currentTab = 'tabs01';

		console.log('tabs01 params', params);
		
		this.tab1RootParams = params;
		this.tab2RootParams = params;
	}
}
