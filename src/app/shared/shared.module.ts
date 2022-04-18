import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/material.module';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, MatCarouselModule.forRoot()],
  exports: [MaterialModule, MatCarouselModule],
})
export class SharedModule {}
