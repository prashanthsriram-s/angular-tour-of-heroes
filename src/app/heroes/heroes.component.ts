import { Component } from '@angular/core';
import Hero from '../hero';
import HEROES from '../hero.list';
import HeroService from '../hero.service';
import MessageService from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes : Hero[] = [];
  constructor(private heroService: HeroService, private messageService: MessageService){
  }
  ngOnInit():void{
    this.getHeroes();
  }
  getHeroes():void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  add(hname: string){
    hname = hname.trim();
    if(hname)
    {
      // this.heroService.addHero(hname).subscribe(hero => this.heroes.push(hero));
    }
  }
}
