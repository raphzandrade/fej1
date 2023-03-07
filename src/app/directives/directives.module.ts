import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHoverDirective } from './custom-hover/custom-hover.directive';



@NgModule({
  declarations: [
    CustomHoverDirective
  ],
  exports: [
    CustomHoverDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
