import { Component, inject } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { PROJECTS } from '../../data/projects';

@Component({
  selector: 'app-projects',
  imports: [TranslocoPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private readonly transloco = inject(TranslocoService);
  protected readonly projects = PROJECTS;

  // Reads the raw translation value directly rather than the `transloco` pipe (see the
  // testimonials companyUrl fix) so a missing per-project reason falls back cleanly to the
  // generic default instead of Transloco's own missing-key fallback (the raw key path string).
  protected unavailableReason(id: string, kind: 'source' | 'live'): string {
    const translation = this.transloco.getTranslation(this.transloco.getActiveLang());
    const reasonKey = kind === 'source' ? 'sourceUnavailableReason' : 'liveUnavailableReason';
    const defaultKey = kind === 'source' ? 'projects.sourceUnavailableDefault' : 'projects.liveUnavailableDefault';
    return translation[`projects.entries.${id}.${reasonKey}`] ?? translation[defaultKey];
  }
}
