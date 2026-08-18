import { Component, inject } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { TESTIMONIALS } from '../../data/testimonials';

@Component({
  selector: 'app-testimonials',
  imports: [TranslocoPipe],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  private readonly transloco = inject(TranslocoService);
  protected readonly testimonials = TESTIMONIALS;

  // Reads the raw translation value directly instead of the `transloco` pipe/`translate()`,
  // which treats any falsy value (null, '') as a *missing* key and returns a truthy fallback —
  // that would make the link render unconditionally regardless of whether a URL was set.
  protected companyUrl(id: string): string | null {
    const translation = this.transloco.getTranslation(this.transloco.getActiveLang());
    return translation[`testimonials.entries.${id}.companyUrl`] ?? null;
  }
}
