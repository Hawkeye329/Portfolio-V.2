import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations: [
    trigger('educationAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class EducationComponent {
  education = {
    university: {
      name: 'Vemana Institute of Technology, Visvesvaraya Technological University',
      year: 'Aug 2021',
      degree: 'Bachelor of Computer Science & Engineering',
      image: '/assets/education/vemana.jpg'
    },
    college: {
      name: 'Christ Junior College',
      year: 'May 2016',
      stream: 'Science, PCMB',
      image: '/assets/education/christ.png'
    },
    school: {
      name: 'Anand Shiksha Kendra, Central Board of Secondary Education',
      year: 'May 2014',
      level: 'High School',
      image: '/assets/education/anand.jpg'
    }
  };

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.style.display = 'none';
    }
  }
}
