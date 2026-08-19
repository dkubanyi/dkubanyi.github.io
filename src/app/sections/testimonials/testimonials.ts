import { Component, inject } from '@angular/core';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

interface TestimonialEntry {
  id: string;
  quote: string;
  role: string;
  company: string;
  companyUrl: string | null;
  name: string;
  placeholder?: boolean;
}

@Component({
  selector: 'app-testimonials',
  imports: [TranslocoPipe],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  private readonly transloco = inject(TranslocoService);

  protected get testimonials(): TestimonialEntry[] {
    return this.transloco.translate<TestimonialEntry[]>('testimonials.entries');
  }
}
