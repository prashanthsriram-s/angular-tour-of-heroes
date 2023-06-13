import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import Hero from '../hero';
import HeroService from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  hero?: Hero;
  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private location: Location)
              {}
  ngOnInit(){
    this.getHero();
  }
  getHero(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }
  goBack(){
    this.location.back();
  }
  save(){
   if(this.hero)
    this.heroService.updateHero(this.hero).subscribe(() => this.goBack()); 
  }
  // onClick(){
  //   console.log("Hello");
  //   this.hero = {
  //     id: 10,
  //     name: 'ScrambledGuy'
  //   };
  //   console.log(`${this.hero.id}, ${this.hero.name}`);
  // }
}
