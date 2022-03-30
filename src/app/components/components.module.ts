import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadFilesComponent } from '@app/components/upload-files/upload-files.component';
import { SharedModule } from '@app/shared/shared.module';
@NgModule({
  declarations: [UploadFilesComponent],
  imports: [CommonModule, SharedModule],
  exports: [UploadFilesComponent],
})
export class ComponentsModule {}
