import { Component } from '@angular/core';
import Hero from '../hero';
import HeroService from '../hero.service';
import MessageService from '../message.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  heroes: Hero[] =[];
  constructor(private heroService: HeroService, private messageService: MessageService){}
  ngOnInit(){
    this.getHeroes();
  }
  getHeroes(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes=heroes.slice(0, 6));
    this.messageService.addMessage("DashBoard: Fetched Top heroes");
  }
}
