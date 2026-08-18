import { Component, inject, signal } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { AVAILABLE_LANGS, Lang, Language } from '../../core/language';

interface NavLink {
  id: string;
  href: string;
}

@Component({
  selector: 'app-nav',
  imports: [TranslocoPipe],
  templateUrl: './nav.html',
  styleUrl: './nav.scss',
})
export class Nav {
  protected readonly language = inject(Language);
  protected readonly menuOpen = signal(false);
  protected readonly availableLangs = AVAILABLE_LANGS;

  protected readonly links: NavLink[] = [
    { id: 'about', href: '#about' },
    { id: 'experience', href: '#experience' },
    { id: 'skills', href: '#skills' },
    { id: 'projects', href: '#projects' },
    { id: 'testimonials', href: '#testimonials' },
    { id: 'contact', href: '#contact' },
  ];

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  setLanguage(lang: Lang): void {
    this.language.setLanguage(lang);
  }
}
