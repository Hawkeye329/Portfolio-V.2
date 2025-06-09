import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AwardsComponent } from './awards/awards.component';
import { InternshipsComponent } from './internships/internships.component';

export const routes: Routes = [
  { path: '', component: PortfolioComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'internships', component: InternshipsComponent },
];
