import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { Page02 } from './page02';

@NgModule({
	declarations: [
		Page02
	],
	imports: [
		IonicPageModule.forChild(Page02)
	],
	entryComponents: [
		Page02
	]
})
export class Page02Module { }