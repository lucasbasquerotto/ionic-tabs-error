import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { Page01 } from './page01';

@NgModule({
	declarations: [
		Page01
	],
	imports: [
		IonicPageModule.forChild(Page01)
	],
	entryComponents: [
		Page01
	]
})
export class Page01Module { }