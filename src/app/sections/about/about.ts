import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

interface QuickFact {
  id: string;
}

@Component({
  selector: 'app-about',
  imports: [TranslocoPipe],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly facts: QuickFact[] = [
    { id: 'experience' },
    { id: 'engagement' },
    { id: 'location' },
    { id: 'languages' },
    { id: 'outsideOfWork' },
  ];
}
