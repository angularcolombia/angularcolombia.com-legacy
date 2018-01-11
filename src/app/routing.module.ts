import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { NotFoundPageComponent } from './pages/not-found/not-found.component';
import { EventsPageComponent } from './pages/events/events.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }, {
    path: 'eventos',
    component: EventsPageComponent
  }, {
    path: '**',
    component: NotFoundPageComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
