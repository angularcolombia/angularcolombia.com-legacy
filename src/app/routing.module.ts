import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: '**',
    component: NotFoundComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
