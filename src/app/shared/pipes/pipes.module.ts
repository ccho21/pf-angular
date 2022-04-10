// angular
import { NgModule } from "@angular/core";
import { PostTimePipe } from './post-time.pipe';
@NgModule({
  declarations: [
    PostTimePipe
  ],
  exports: [
    PostTimePipe
  ],
})
export class PipesModule {

}
