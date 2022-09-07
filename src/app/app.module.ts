import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './Components/commom/footer/footer.component';
import { NavbarComponent } from './Components/commom/navbar/navbar.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import {TableModule} from 'primeng/table';
import { NguCarouselModule } from '@ngu/carousel';
import {AccordionModule} from 'primeng/accordion';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { NewsComponent } from './Pages/news/news.component';
import { NewsDetailComponent } from './Pages/news-detail/news-detail.component';
import { LoginAdmComponent } from './Pages/login-adm/login-adm.component';
import { DefaultComponent } from './components/Dashboard/Admin/default/default.component';
import { HeaderAdmComponent } from './components/Dashboard/Admin/header-adm/header-adm.component';
import { HomeAdmComponent } from './components/Dashboard/Admin/home-adm/home-adm.component';
import { RegistersAdmComponent } from './components/Dashboard/Admin/registers-adm/registers-adm.component';
import { NavbarHomeComponent } from './components/commom/navbar-home/navbar-home.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    NewsComponent,
    NewsDetailComponent,
    LoginAdmComponent,
    DefaultComponent,
    HeaderAdmComponent,
    HomeAdmComponent,
    RegistersAdmComponent,
    NavbarHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    NguCarouselModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
