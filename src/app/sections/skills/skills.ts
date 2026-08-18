import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { SKILL_GROUPS } from '../../data/skills';

@Component({
  selector: 'app-skills',
  imports: [TranslocoPipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly groups = SKILL_GROUPS;
}
