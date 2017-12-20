import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LazyLoadingPage } from './lazy-loading';

@NgModule({
  declarations: [
    LazyLoadingPage,
  ],
  imports: [
    IonicPageModule.forChild(LazyLoadingPage),
  ],
})
export class LazyLoadingPageModule {}
