import { Component } from '@angular/core';

// Hero class
export class Hero { id: number; name: string; }

@Component({
  selector: 'my-app',
  template: ` <h1>{{title}}</h1> <h2>{{hero.name}} details!</h2> <div><label>id: </label>{{hero.id}}</div><div><label>name: </label><input [(ngModel)]="hero.name" placeholder="name"></div>`,
})

//use of our new class
export class AppComponent  { title='Tour of Heroes'; hero: Hero = {id: 1, name 'Windstorm'};}
