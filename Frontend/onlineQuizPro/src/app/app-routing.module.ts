import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FrontComponent } from './front/front.component';
import { GeographyComponent } from './geography/geography.component';
import { IntelligenceComponent } from './intelligence/intelligence.component';
import { MeanStackComponent } from './mean-stack/mean-stack.component';
import { ScienceComponent } from './science/science.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'', component:FrontComponent},
  {path:'login', component:LoginComponent},
  {path:'main-page', component:MainPageComponent},
  {path:'geography', component:GeographyComponent},
  {path:'intelligence', component:IntelligenceComponent}, 
  {path:'mean-stack', component:MeanStackComponent},
  {path:'science', component:ScienceComponent},
  {path:'signup', component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
