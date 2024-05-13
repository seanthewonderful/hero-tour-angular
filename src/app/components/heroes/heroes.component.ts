import { Component } from '@angular/core';
import { Hero } from '../../hero';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HEROES } from '../../mock-heroes';
import { HeroDetailsComponent } from '../hero-details/hero-details.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [CommonModule, FormsModule, HeroDetailsComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  name = "Sean"
  age = 25

  selectedHero?: Hero

  heroes = HEROES

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
}
