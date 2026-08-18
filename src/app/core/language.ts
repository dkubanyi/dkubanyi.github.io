import { Injectable, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { TranslocoService } from '@jsverse/transloco';

export const AVAILABLE_LANGS = ['en', 'de'] as const;
export type Lang = (typeof AVAILABLE_LANGS)[number];

const STORAGE_KEY = 'lang';

function resolveInitialLang(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (isLang(stored)) {
    return stored;
  }

  const browserLang = navigator.language?.slice(0, 2);
  if (isLang(browserLang)) {
    return browserLang;
  }

  return 'en';
}

function isLang(value: string | null | undefined): value is Lang {
  return !!value && (AVAILABLE_LANGS as readonly string[]).includes(value);
}

@Injectable({ providedIn: 'root' })
export class Language {
  private readonly transloco = inject(TranslocoService);

  readonly activeLang = toSignal(this.transloco.langChanges$, {
    initialValue: this.transloco.getActiveLang(),
  });

  constructor() {
    this.transloco.setActiveLang(resolveInitialLang());

    effect(() => {
      document.documentElement.lang = this.activeLang();
    });
  }

  setLanguage(lang: Lang): void {
    this.transloco.setActiveLang(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }
}
