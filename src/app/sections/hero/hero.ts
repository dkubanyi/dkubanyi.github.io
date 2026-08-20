import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { START_YEAR } from '../../core/constants';

@Component({
  selector: 'app-hero',
  imports: [TranslocoPipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly year = new Date().getFullYear() - START_YEAR;
}
