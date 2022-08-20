import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './components/Dashboard/Admin/default/default.component';
import { HomeAdmComponent } from './components/Dashboard/Admin/home-adm/home-adm.component';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
import { LoginAdmComponent } from './Pages/login-adm/login-adm.component';
import { LoginComponent } from './Pages/login/login.component';
import { NewsDetailComponent } from './Pages/news-detail/news-detail.component';
import { NewsComponent } from './Pages/news/news.component';
import { RegisterComponent } from './Pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: LoginAdmComponent
  },
  {
    path: 'cadastro',
    component: RegisterComponent
  },
  {
    path: 'noticias',
    component: NewsComponent,
  },
  {
    path: 'noticias/:id',
    component: NewsDetailComponent
  },
  {
    path: 'dashboard',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: HomeAdmComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
