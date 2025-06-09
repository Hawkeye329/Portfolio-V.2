import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ActivitiesComponent } from '../activities/activities.component';

import { AwardsComponent } from '../awards/awards.component';
import { EducationComponent } from '../education/education.component';
import { ExperienceComponent } from '../experience/experience.component';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { VolunteeringComponent } from '../volunteering/volunteering.component';

const appRoutes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },

  { path: 'activities', component: ActivitiesComponent },

  { path: 'volunteering', component: VolunteeringComponent },
  { path: 'awards', component: AwardsComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}