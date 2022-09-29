import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { IndustriesComponent } from './industries/industries.component';
import { SliderComponent } from './slider/slider.component';
import { SolutionComponent } from './solution/solution.component';
import { FooterComponent } from './footer/footer.component';
import { ExperticeComponent } from './expertice/expertice.component';
import { LoginComponent } from './login/login.component';
import { CarosalComponent } from './carosal/carosal.component';
import { Carosal2Component } from './carosal2/carosal2.component';
import { LobhikComponent } from './lobhik/lobhik.component';
import { HttpClientModule } from '@angular/common/http';
import { TextComponent } from './text/text.component';
import { FormsModule } from '@angular/forms';

@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    IndustriesComponent,
    SliderComponent,
    SolutionComponent,
    FooterComponent,
    ExperticeComponent,
    LoginComponent,
    CarosalComponent,
    Carosal2Component,
    LobhikComponent,
    TextComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
