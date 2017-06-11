import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  providers: [HeroService],
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
