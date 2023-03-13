import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyPipePipe } from './my-pipe/my-pipe.pipe';



@NgModule({
  declarations: [
    MyPipePipe
  ],
  exports: [
    MyPipePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
