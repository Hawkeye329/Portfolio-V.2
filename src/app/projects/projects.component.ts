import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    trigger('projectAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Static Hair Extractor',
      description: 'Built a vacuum cleaner model that extracts hair which utilizes waste material as a resource, and hair used in applications like alternative fuel technology, and alternative concrete technology, thereby in designing an ultimate cleaning system.',
      githubLink: 'https://github.com/MustaqAhamed/SHE-Static-Hair-Extractor',
      demoLink: 'https://www.youtube.com/watch?v=2I-_UqDLLWk',
      image: 'assets/projects/static-hair-extractor.jpg'
    },
    {
      name: 'Deep Learning with recurrent neural network',
      description: 'Designed a machine learning model for predicting emotion from text using recurrent neural networks.',
      githubLink: 'https://github.com/MustaqAhamed/Text-Emotion-Predictor',
      demoLink: 'https://www.youtube.com/watch?v=KBieaOcWiaQ',
      image: 'assets/projects/deep-learning-rnn.png'
    },
    {
      name: 'Online Food Ordering System',
      description: 'The online food ordering system in PHP is a simple project developed using PHP, JavaScript, and CSS. The project connects restaurants with different customers.',
      githubLink: 'https://github.com/MustaqAhamed/Online-Food-Ordering-System',
      demoLink: 'https://www.youtube.com/watch?v=yvLerU9CeXQ',
      image: 'assets/projects/online-food-ordering-system.png'
    },
    {
      name: 'Rain-Water Harvesting',
      description: 'This project helped us to learn about the proper utilization of various graphics library functions and also the concept of rainwater harvesting using OpenGL.',
      githubLink: 'https://github.com/MustaqAhamed/Rain-Water-Harvesting',
      image: 'assets/projects/rain-water-harvesting.png'
    },
    {
      name: 'SocioNet',
      description: 'The website “Socio-Net” developed using JSP and Oracle Database is used to connect people in a very easy, simple, and efficient way and one can share their feelings, information, and ideas.',
      githubLink: 'https://github.com/MustaqAhamed/socioNet',
      image: 'assets/projects/socionet.png'
    }
  ];
}
