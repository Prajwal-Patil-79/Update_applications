import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [
  {
    path:'mobile',
    component:MobileComponent
  },
  {
    path:'email',
    component:MobileComponent
  },
  {
    path:'address',
    component:MobileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
