import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true,scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  onSameUrlNavigation: 'reload',
  scrollOffset: [50, 50],
  relativeLinkResolution: 'legacy',})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
