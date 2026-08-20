import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Nav} from './sections/nav/nav';
import {Hero} from './sections/hero/hero';
import {About} from './sections/about/about';
import {Experience} from './sections/experience/experience';
import {Skills} from './sections/skills/skills';
import {Testimonials} from './sections/testimonials/testimonials';
import {Contact} from './sections/contact/contact';
import {Footer} from './sections/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    Nav,
    Hero,
    About,
    Experience,
    Skills,
    // Projects,
    Testimonials,
    Contact,
    Footer],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
})
export class App {}
