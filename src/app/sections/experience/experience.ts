import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { EDUCATION, EXPERIENCE } from '../../data/experience';

@Component({
  selector: 'app-experience',
  imports: [TranslocoPipe],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  protected readonly experience = EXPERIENCE;
  protected readonly education = EDUCATION;
}
