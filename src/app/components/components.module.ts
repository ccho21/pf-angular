import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { PipesModule } from '@app/shared/pipes/pipes.module';

import { UploadFilesComponent } from '@app/components/upload-files/upload-files.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [UploadFilesComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    PipesModule,
    RouterModule,
  ],
  exports: [UploadFilesComponent],
})
export class ComponentsModule {}
