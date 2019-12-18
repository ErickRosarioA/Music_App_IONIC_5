import { IonicModule } from '@ionic/angular';
import { SidemenuComponent } from './sidemenu/sidemenu.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SidemenuComponent],
  imports: [
    CommonModule,
    IonicModule
  ],exports:[ SidemenuComponent]
})
export class ComponentsModule { }
