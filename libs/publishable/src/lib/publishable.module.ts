import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishableComponent } from './publishable/publishable.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PublishableComponent
  ],
  exports: [
    PublishableComponent
  ]
})
export class PublishableModule {}
