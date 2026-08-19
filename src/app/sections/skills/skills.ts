import { Component, inject } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

interface Skill {
  name: string;
  icon?: string;
}

interface SkillGroup {
  id: string;
  label: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  imports: [TranslocoPipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  private readonly transloco = inject(TranslocoService);

  protected get groups(): SkillGroup[] {
    return this.transloco.translate<SkillGroup[]>('skills.groups');
  }
}
