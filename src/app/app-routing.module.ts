import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EducationComponent } from './education/education.component'; // Import EducationComponent
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import {VolunteeringComponent} from './volunteering/volunteering.component';
import { AwardsComponent } from './awards/awards.component';
import { InternshipsComponent } from './internships/internships.component';

const routes: Routes = [
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' }, // Default route to PortfolioComponent
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'education', component: EducationComponent }, // Route to EducationComponent
  {path: 'experience', component: ExperienceComponent}, //Route to ExperienceComponent
  {path: 'internships', component:InternshipsComponent}, //Route to ExperienceComponent
  {path:'skills', component: SkillsComponent},
  {path: 'projects', component:ProjectsComponent },
  {path: 'volunteering', component:VolunteeringComponent},
  {path: 'awards', component: AwardsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
