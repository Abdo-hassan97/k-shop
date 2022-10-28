import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/body/body.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HopesComponent } from './components/hopes/hopes.component';
import { InfoComponent } from './components/info/info.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';

const routes: Routes = [
  {path:'',redirectTo:'body',pathMatch:'full'},
  { path:'hopes',component:HopesComponent},
  { path:'info',component:InfoComponent},
  { path:'conectUS',component:ContactUsComponent},
  { path:'body',component:BodyComponent},
  { path:'Products',component:ProductsDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
