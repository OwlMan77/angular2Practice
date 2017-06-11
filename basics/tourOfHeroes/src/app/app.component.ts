import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; import { AppComponent } from './app.component'; import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';

@Component({
selector: 'my-app', template: ` <h1>{{title}}</h1> <my-heroes></my-heroes> `
})

export class AppComponent { title = 'Tour of Heroes'; }


@NgModule({ imports: [ BrowserModule, FormsModule ], declarations: [ AppComponent, HeroDetailComponent, HeroesComponent ], providers: [ HeroService ], bootstrap: [ AppComponent ] })

export class AppModule { }
