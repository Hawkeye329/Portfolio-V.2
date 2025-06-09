import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('skillAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class SkillsComponent implements OnInit {
  skills = [
    {
      name: 'Frontend Development',
      items: ['HTML', 'CSS', 'Bootstrap', 'JSP', 'Angular', 'React']
    },
    {
      name: 'Backend Development',
      items: ['Java', 'Python']
    },
    {
      name: 'Database',
      items: ['MySQL', 'Oracle', 'MongoDB', 'phpMyAdmin']
    },
    {
      name: 'Artificial Intelligence',
      items: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Wit.ai', 'Chatbot development']
    },
    {
      name: 'Automation',
      items: ['VBA programming']
    },
    {
      name: 'Cloud',
      items: ['Salesforce administration']
    }
  ];

  ngOnInit() {
    // Any initialization logic can go here
  }
}
