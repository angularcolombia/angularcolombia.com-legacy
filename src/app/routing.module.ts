import { RouteGuardService } from './core/services/route-guard.service';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home/home.component';
import { NotFoundPageComponent } from './pages/not-found/not-found.component';
import { EventsPageComponent } from './pages/events/events.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }, {
    path: 'eventos',
    component: EventsPageComponent
  },{
    path: 'eventos/:event_id',
    component: EventDetailComponent
  }, {
    path: '**',
    component: NotFoundPageComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[RouteGuardService]
})
export class RoutingModule { }
