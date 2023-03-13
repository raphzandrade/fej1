import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './list-page/list-page.component';
import { ComponentsModule } from '../components/components.module';
import { FormPageComponent } from './form-page/form-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivesExamplesComponent } from './directives-examples/directives-examples.component';
import { DirectivesModule } from '../directives/directives.module';
import { PipesModule } from '../pipes/pipes.module';
import { LoginPageComponent } from './login-page/login-page.component';




@NgModule({
  declarations: [
    ListPageComponent,
    FormPageComponent,
    DirectivesExamplesComponent,
    LoginPageComponent,
  ],
  exports: [
    ListPageComponent,
    FormPageComponent,
    LoginPageComponent,
    DirectivesExamplesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    DirectivesModule,
    PipesModule
  ]
})
export class PagesModule { }
