import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './content/about/about.component';
import { LoginComponent } from './content/auth/login/login.component';
import { RegisterComponent } from './content/auth/register/register.component';
import { ContactComponent } from './content/contact/contact.component';
import { HomeComponent } from './content/home/home.component';
import { MovieEditComponent } from './content/Surveys/edit/edit.component';
import { MovieListComponent } from './content/Surveys/list/list.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { ServicesComponent } from './content/services/services.component';
import { SurveyAddComponent } from './content/Surveys/survey-add/survey-add.component';
import { AnswerPageComponent } from './content/Surveys/answer-page/answer-page.component';

const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'survey/list', component: MovieListComponent},
  {path: 'survey/add', component: SurveyAddComponent},
  {path: 'movies/edit/:id', component: MovieEditComponent},
  {path: 'survey/answer-page/:id', component: AnswerPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
