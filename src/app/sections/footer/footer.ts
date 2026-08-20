import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [TranslocoPipe, NgOptimizedImage],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly year = new Date().getFullYear();
}
