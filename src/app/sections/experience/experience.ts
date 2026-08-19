import { Component, inject } from '@angular/core';
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
  styleUrl: './experience.scss',
})
export class Experience {
  private readonly transloco = inject(TranslocoService);

  // Read via translate<T>() rather than the `transloco` pipe: the pipe's transform() is typed to
  // always return `string`, so property access on a piped array (job.role, edu.degree, ...) fails
  // strict template type-checking even though the runtime value is an array.
  protected get jobs(): ExperienceEntry[] {
    return this.transloco.translate<ExperienceEntry[]>('experience.entries');
  }

  protected get education(): EducationEntry[] {
    return this.transloco.translate<EducationEntry[]>('experience.education');
  }
}
