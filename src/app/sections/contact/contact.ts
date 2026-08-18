import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

interface ContactLink {
  label: string;
  href: string;
  icon?: string;
}

@Component({
  selector: 'app-contact',
  imports: [TranslocoPipe],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly links: ContactLink[] = [
    { label: 'dkubanyi@gmail.com', href: 'mailto:dkubanyi@gmail.com' },
    { label: 'linkedin.com/in/dkubanyi', href: 'https://www.linkedin.com/in/dkubanyi', icon: '/icons/linked-in-alt.svg' },
    { label: 'github.com/dkubanyi', href: 'https://github.com/dkubanyi', icon: '/icons/github.svg' },
  ];
}
