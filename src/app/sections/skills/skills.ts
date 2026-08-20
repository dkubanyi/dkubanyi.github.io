import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import {NgOptimizedImage} from '@angular/common';

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
  imports: [TranslocoPipe, NgOptimizedImage],
  templateUrl: './skills.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './skills.scss',
})
export class Skills {
  private readonly transloco = inject(TranslocoService);

  protected get groups(): SkillGroup[] {
    return this.transloco.translate<SkillGroup[]>('skills.groups');
  }
}
