import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './pages/slider/slider.component';
import { HippoComponent } from './pages/hippo/hippo.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'slider',
    component: SliderComponent
  },
  {
    path: 'hippo',
    component: HippoComponent
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
