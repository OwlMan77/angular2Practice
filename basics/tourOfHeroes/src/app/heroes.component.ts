import { Component, OnInit } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  providers: [HeroService],
  template: `<h2>My Heroes</h2> <ul class="heroes"> <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" (click)="onSelect(hero)"> <span class="badge">{{hero.id}}</span> {{hero.name}} </li> </ul> <div *ngIf="selectedHero"> <h2> {{selectedHero.name | uppercase}} is my hero </h2> <button (click)="gotoDetail()">View Details</button> </div>`,
})

//use of our new class

export class HeroesComponent implements OnInit { heroes: Hero[]; selectedHero: Hero; constructor( private router: Router, private heroService: HeroService) { } getHeroes(): void { this.heroService.getHeroes().then(heroes => this.heroes = heroes); } ngOnInit(): void { this.getHeroes(); } onSelect(hero: Hero): void { this.selectedHero = hero; } gotoDetail(): void { this.router.navigate(['/detail', this.selectedHero.id]); } }
