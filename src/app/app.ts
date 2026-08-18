import { Component, inject } from '@angular/core';
import { Nav } from './sections/nav/nav';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Experience } from './sections/experience/experience';
import { Skills } from './sections/skills/skills';
import { Projects } from './sections/projects/projects';
import { Testimonials } from './sections/testimonials/testimonials';
import { Contact } from './sections/contact/contact';
import { Footer } from './sections/footer/footer';
import { Language } from './core/language';

@Component({
  selector: 'app-root',
  imports: [Nav, Hero, About, Experience, Skills, Projects, Testimonials, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly language = inject(Language);
}
