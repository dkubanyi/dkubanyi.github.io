import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [TranslocoPipe, NgOptimizedImage],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly year = new Date().getFullYear();
}
