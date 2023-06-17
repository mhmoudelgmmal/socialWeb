import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginAndRegisterComponent } from './components/login/loginAndRegister.component';
import { NotFoundComponent } from 'src/app/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:loginAndRegisterComponent },
  { path: 'register', component:loginAndRegisterComponent },
  { path: '**', component:NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
