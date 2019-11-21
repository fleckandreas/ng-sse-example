import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientViewComponent } from './components/client-view/client-view.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';


const routes: Routes = [
  { path: '', redirectTo: 'admin',pathMatch:'full' },
  { path: 'client', component: ClientViewComponent },
  { path: 'admin', component: AdminViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
