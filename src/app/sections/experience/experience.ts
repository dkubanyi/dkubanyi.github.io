import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
}

interface EducationEntry {
  id: string;
  school: string;
  degree: string;
  year: string;
}

@Component({
  selector: 'app-experience',
  imports: [TranslocoPipe],
  templateUrl: './experience.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './experience.scss',
})
export class Experience {
  private readonly t = inject(TranslocoService);

  protected get jobs(): ExperienceEntry[] {
    return this.t.translate<ExperienceEntry[]>('experience.entries');
  }

  protected get education(): EducationEntry[] {
    return this.t.translate<EducationEntry[]>('experience.education');
  }
}
