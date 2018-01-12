import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { Tabs01 } from './tabs01';

@NgModule({
	declarations: [
		Tabs01
	],
	imports: [
		IonicPageModule.forChild(Tabs01)
	],
	entryComponents: [
		Tabs01
	]
})
export class Tabs01Module { }