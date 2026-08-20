import { Component, ElementRef, HostListener, inject, signal, ChangeDetectionStrategy } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './nav.scss',
})
export class Nav {
  protected readonly language = inject(Language);
  protected readonly menuOpen = signal(false);
  protected readonly langMenuOpen = signal(false);
  protected readonly availableLangs = AVAILABLE_LANGS;

  protected readonly langMeta: Record<Lang, { flag: string; name: string }> = {
    en: { flag: '🇺🇸', name: 'English' },
    de: { flag: '🇩🇪', name: 'Deutsch' },
  };

  protected readonly links: NavLink[] = [
    { id: 'about', href: '#about' },
    { id: 'experience', href: '#experience' },
    { id: 'skills', href: '#skills' },
    // { id: 'projects', href: '#projects' },
    { id: 'testimonials', href: '#testimonials' },
    { id: 'contact', href: '#contact' },
  ];

  private readonly elementRef = inject(ElementRef<HTMLElement>);

  protected currentLangMeta(): { flag: string; name: string } {
    return this.langMeta[this.language.activeLang() as Lang];
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleLangMenu(): void {
    this.langMenuOpen.update((open) => !open);
  }

  closeLangMenu(): void {
    this.langMenuOpen.set(false);
  }

  selectLanguage(lang: Lang): void {
    this.language.setLanguage(lang);
    this.closeLangMenu();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.langMenuOpen() && !this.elementRef.nativeElement.contains(event.target as Node)) {
      this.closeLangMenu();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeLangMenu();
  }
}
