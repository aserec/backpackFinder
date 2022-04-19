import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinderPageRoutingModule } from './finder-routing.module';

import { FinderPage } from './finder.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinderPageRoutingModule,
    SharedModule,
  ],
  declarations: [FinderPage],
})
export class FinderPageModule {}
