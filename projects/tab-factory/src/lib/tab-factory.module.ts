import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TabFactoryComponent } from './tab-factory.component';



@NgModule({
  declarations: [
    TabFactoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TabFactoryComponent
  ]
})
export class TabFactoryModule { }
