import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventComponent } from './components/event/event.component';

const routesShared: Routes = [  
  {
    path: 'event/:id',
    component: EventComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routesShared)],
  exports: [RouterModule]
})
export class SharedRoutingModule {}