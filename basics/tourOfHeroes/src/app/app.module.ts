import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent} from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ HttpModule, BrowserModule, FormsModule, AppRoutingModule, InMemoryWebApiModule.forRoot(InMemoryDataService), RouterModule.forRoot([{ path: 'heroes', component: HeroesComponent }, { path: 'dashboard', component: DashboardComponent }, { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, { path: 'detail/:id', component: HeroDetailComponent },]) ],
  declarations: [ AppComponent, DashboardComponent, HeroDetailComponent, HeroesComponent ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ] })

export class AppModule { }
