import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupcompradorPage } from './signupcomprador.page';

const routes: Routes = [
  {
    path: '',
    component: SignupcompradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupcompradorPageRoutingModule {}
