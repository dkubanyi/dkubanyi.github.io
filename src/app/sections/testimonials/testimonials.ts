import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { TESTIMONIALS } from '../../data/testimonials';

@Component({
  selector: 'app-testimonials',
  imports: [TranslocoPipe],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
})
export class Testimonials {
  protected readonly testimonials = TESTIMONIALS;
}
