import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'error/:error',
    component: NotFoundComponent
  },
  {path: 'property',
   loadChildren: () => import('./property/property.module').then(mod => mod.PropertyModule),
  },
  {path: 'reservation',
   loadChildren: () => import('./reservation/reservation.module').then(mod => mod.ReservationModule),
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
