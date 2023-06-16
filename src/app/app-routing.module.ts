import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PanelModule } from './modules/panel/panel.module';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing',
   loadChildren:()=>import("./modules/landing/landing.module").then(x=>x.LandingModule)},
  { path:'panel', canActivate:[AuthGuard],
  loadChildren:()=>import("./modules/panel/panel.module").then(x=>x.PanelModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
