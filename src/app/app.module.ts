import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import {TableModule} from 'primeng/table';
import { NguCarouselModule } from '@ngu/carousel';
import {AccordionModule} from 'primeng/accordion';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
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
import { MessagesAdmComponent } from './components/Dashboard/Admin/messages-adm/messages-adm.component';
import { NavbarComponent } from './components/commom/navbar/navbar.component';
import { FooterComponent } from './components/commom/footer/footer.component';
import { NewsAdmComponent } from './components/Dashboard/Admin/news-adm/news-adm.component';
import { AddNewsAdmComponent } from './components/Dashboard/Admin/add-news-adm/add-news-adm.component';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule} from '@angular/common/http';
import { DefaultUserComponent } from './components/Dashboard/User/default-user/default-user.component';
import { HeaderUserComponent } from './components/Dashboard/User/header-user/header-user.component';
import { HomeUserComponent } from './components/Dashboard/User/home-user/home-user.component';
import { ContactComponent } from './components/Dashboard/User/contact/contact.component';
import { PersonalDataUserComponent } from './components/Dashboard/User/personal-data-user/personal-data-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToxicityService } from './Services/toxicity.service';
import { SharedService } from './Services/shared.service';
import { CommonService } from './Services/common.service';


import { NgxMaskModule, IConfig } from 'ngx-mask'

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

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
    MessagesAdmComponent,
    NewsAdmComponent,
    AddNewsAdmComponent,
    DefaultUserComponent,
    HeaderUserComponent,
    HomeUserComponent,
    ContactComponent,
    PersonalDataUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    NguCarouselModule,
    TableModule,
    AngularEditorModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule,
    NgxMaskModule.forRoot()
  ],
  providers: [ToxicityService, SharedService, CommonService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
