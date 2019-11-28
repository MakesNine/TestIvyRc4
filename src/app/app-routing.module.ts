import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'map1', loadChildren: () => import('./map1/map1.module').then(m => m.Map1Module) },
  { path: 'map2', loadChildren: () => import('./map2/map2.module').then(m => m.Map2Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
