import { Component, inject } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

interface ProjectEntry {
  id: string;
  title: string;
  description: string;
  tags: string[];
  sourceUrl?: string;
  liveUrl?: string;
  placeholder?: boolean;
  sourceUnavailableReason?: string;
  liveUnavailableReason?: string;
}

@Component({
  selector: 'app-projects',
  imports: [TranslocoPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private readonly transloco = inject(TranslocoService);

  protected get projects(): ProjectEntry[] {
    return this.transloco.translate<ProjectEntry[]>('projects.entries');
  }

  protected unavailableReason(project: ProjectEntry, kind: 'source' | 'live'): string {
    const reason = kind === 'source' ? project.sourceUnavailableReason : project.liveUnavailableReason;
    const defaultKey = kind === 'source' ? 'projects.sourceUnavailableDefault' : 'projects.liveUnavailableDefault';
    return reason ?? this.transloco.translate(defaultKey);
  }
}
