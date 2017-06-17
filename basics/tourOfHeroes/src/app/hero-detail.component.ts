import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import 'rxjs/add/operator/switchMap';


@Component(
  {
    selector:'hero-detail',
    template: `<div *ngIf="hero"> <h2>{{hero.name}} details!</h2> <div> <label>id: </label>{{hero.id}}</div> <div> <label>name: </label> <input [(ngModel)]="hero.name" placeholder="name" /> </div> <button (click)="goBack()">Back</button> </div>,
  }

  ngOnInit(): void { this.route.params .switchMap((params: Params) => this.heroService.getHero(+params['id'])) .subscribe(hero => this.hero = hero); };

export class HeroDetailComponent implements OnInit {
 @Input() hero: Hero;

 goBack(): void { this.location.back();}

 save(): void { this.heroService.update(this.hero) .then(() => this.goBack()); }
}
