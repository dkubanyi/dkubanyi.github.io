import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-projects',
  imports: [TranslocoPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects = PROJECTS;
}
