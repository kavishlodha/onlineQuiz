import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FrontComponent } from './front/front.component';


const routes: Routes = [
  {path:'', component:FrontComponent},
  {path:'login', component:LoginComponent},
  {path:'main-page', component:MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
