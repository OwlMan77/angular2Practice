import { Component } from '@angular/core';

@Component({ selector: 'my-app', template: `<h1>{{title}}</h1> <a routerLink="/heroes">Heroes</a> <router-outlet></router-outlet>` })

export class AppComponent { title = 'Tour of Heroes'; }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component'; import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';

@NgModule({ imports: [ BrowserModule, FormsModule ], declarations: [ AppComponent, HeroDetailComponent, HeroesComponent ], providers: [ HeroService ], bootstrap: [ AppComponent ] })

export class AppModule { }
