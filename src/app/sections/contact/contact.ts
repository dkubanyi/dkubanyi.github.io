import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import {NgOptimizedImage} from '@angular/common';

interface ContactLink {
  label: string;
  href: string;
  icon?: string;
}

@Component({
  selector: 'app-contact',
  imports: [TranslocoPipe, NgOptimizedImage],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly links: ContactLink[] = [
    { label: 'linkedin.com/in/dkubanyi', href: 'https://www.linkedin.com/in/dkubanyi', icon: '/icons/linked-in-alt.svg' },
    { label: 'github.com/dkubanyi', href: 'https://github.com/dkubanyi', icon: '/icons/github.svg' },
  ];
}
