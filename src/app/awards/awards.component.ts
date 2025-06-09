import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-awards',
  standalone: true,
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css'],
  imports: [CommonModule],
  animations: [
    trigger('awardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate(
          '500ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ],
})
export class AwardsComponent {
  awards = [
    {
      title: '6th Place at the Infosys InStep BizHacks 2023 | August 2023',
      details: [
        'Secured 6th place at the Business Plan Hackathon InStepBizHacks conducted by Infosys under the theme “The Advent of AI”',
        'Qualified for the Grand Finale to present the idea before Infosys founder N. R. Narayana Murthy.',
        'Team members: Alyssa Leifer, Ebony Gatto',
      ],
    },

    {
      title: 'VTU Final Year Project Sponsorship | June 2021',
      details: [
        'Recipient of INR: 5000 Sponsorship from VTU and privately funded final year project from Alumnus of INR: 7000',
        'Team members: Sreekanth MS, Priyanka B, Ashwini',
      ],
    },
    {
      title:
        '3rd Place in Mathematics Project Competition - Nucleic Acid Double Helix | September 2014 ',
      details: [
        'Secured 3rd Place in Mathematics Project Competition in Intercollegiate Science Expo Cosmos v5.0 2014 event held at Christ Junior College',
        'Team members: Sumanth, Harshitha, Abrar, Shah Keval, Vijay Kumar, Suma',
      ],
    },
  ];
}
