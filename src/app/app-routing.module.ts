import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Pages/landing-page/landing-page.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
