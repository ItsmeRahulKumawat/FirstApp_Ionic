import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RajasthanPage } from './rajasthan.page';

const routes: Routes = [
  {
    path: '',
    component: RajasthanPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RajasthanPageRoutingModule {}
