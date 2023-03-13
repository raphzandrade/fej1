import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { ListPageComponent } from './pages/list-page/list-page.component'
import { FormPageComponent } from './pages/form-page/form-page.component';
import { DirectivesExamplesComponent } from './pages/directives-examples/directives-examples.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuard } from './guards/auth/auth.guard';

const routes: Routes = [
  { path: 'minha-lista', component: ListPageComponent, canActivate: [AuthGuard] },
  {
    path: 'cadastro', component: FormPageComponent
  },
  { path: 'diretivas', component: DirectivesExamplesComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', redirectTo: 'minha-lista' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
