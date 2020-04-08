import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupcompradorPageRoutingModule } from './signupcomprador-routing.module';

import { SignupcompradorPage } from './signupcomprador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupcompradorPageRoutingModule
  ],
  declarations: [SignupcompradorPage]
})
export class SignupcompradorPageModule {}
