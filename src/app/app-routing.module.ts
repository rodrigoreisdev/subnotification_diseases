import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewsAdmComponent } from './components/Dashboard/Admin/add-news-adm/add-news-adm.component';
import { DefaultComponent } from './components/Dashboard/Admin/default/default.component';
import { HomeAdmComponent } from './components/Dashboard/Admin/home-adm/home-adm.component';
import { MessagesAdmComponent } from './components/Dashboard/Admin/messages-adm/messages-adm.component';
import { NewsAdmComponent } from './components/Dashboard/Admin/news-adm/news-adm.component';
import { RegistersAdmComponent } from './components/Dashboard/Admin/registers-adm/registers-adm.component';
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
      },
      {
        path: 'cadastros',
        component: RegistersAdmComponent
      },
      {
        path: 'mensagens',
        component: MessagesAdmComponent
      },
      {
        path: 'publicacoes',
        component: NewsAdmComponent
      },
      {
        path: 'nova-publicacao',
        component: AddNewsAdmComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
