import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontComponent } from './front/front.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GeographyComponent } from './geography/geography.component';
import { IntelligenceComponent } from './intelligence/intelligence.component';
import { MeanStackComponent } from './mean-stack/mean-stack.component';
import { ScienceComponent } from './science/science.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    LoginComponent,
    MainPageComponent,
    GeographyComponent,
    IntelligenceComponent,
    MeanStackComponent,
    ScienceComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
