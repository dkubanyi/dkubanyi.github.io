import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { START_YEAR } from '../../core/constants';

interface QuickFact {
  id: string;
}

@Component({
  selector: 'app-about',
  imports: [TranslocoPipe],
  templateUrl: './about.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './about.scss',
})
export class About {
  protected readonly year = new Date().getFullYear() - START_YEAR;
  protected readonly facts: QuickFact[] = [
    { id: 'experience' },
    { id: 'engagement' },
    { id: 'location' },
    { id: 'languages' },
    { id: 'outsideOfWork' },
  ];
}
