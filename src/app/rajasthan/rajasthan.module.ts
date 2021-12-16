import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RajasthanPageRoutingModule } from './rajasthan-routing.module';

import { RajasthanPage } from './rajasthan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RajasthanPageRoutingModule
  ],
  declarations: [RajasthanPage]
})
export class RajasthanPageModule {}
