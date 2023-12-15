import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal, AnimalsService } from './animals.service';
import { AnimalCardComponent } from './animal-card.component';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-animals-list',
  standalone: true,
  imports: [CommonModule, AnimalCardComponent],
  templateUrl: './animals-list.component.html',
  styleUrls: ['./animals-list.component.css']
})

export class AnimalsListComponent implements OnInit, OnDestroy{
  constructor(readonly animalsService: AnimalsService){}
  subscriptions: Subscription = new Subscription;
  animals: Animal[] | undefined;
  filteredAnimals = this.animalsService.animals;
  locations: string[] |undefined;
  zooAreas: string[]|undefined;
  locationfilter: string[] = [];
  areafilter:string[] = [];

  loading = true;
  private _animalSearch: string = '';

  ngOnInit(): void  {
    this.subscriptions.add(this.animalsService.getSheetData().subscribe(data =>{
      this.animals = this.animalsService.sheetDataToArray(data);
      this.performFilter();
      this.loading = false;
      this.locations = this.animalsService.getAllLocations();
      this.zooAreas = this.animalsService.getAllZooAreas();
    }))
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  setAnimalSearch(input : string){
    this._animalSearch = input;
    this.performFilter();
  }
  updateLocationFilter(input:string){
    if(this.locationfilter.includes(input)){
      this.locationfilter.splice(this.locationfilter.indexOf(input), 1);
    } else {
      this.locationfilter.push(input);
    }
    this.performFilter();
  }
  updateAreaFilter(input:string){
    if(this.areafilter.includes(input)){
      this.areafilter.splice(this.areafilter.indexOf(input), 1);
    } else {
      this.areafilter.push(input);
    }
    this.performFilter();
  }

  performFilter(){
    if (this.animals){
      this.filteredAnimals = this.animals;
    }
    this.filteredAnimals=this.filteredAnimals.filter((animal: Animal) =>
      animal.name.toLocaleLowerCase().includes(this._animalSearch.toLocaleLowerCase())
      || animal.scientificName.toLocaleLowerCase().includes(this._animalSearch.toLocaleLowerCase())
    );
    if (this.locationfilter.length>0){
      this.filteredAnimals = this.filteredAnimals.filter((animal: Animal )=>
      animal.location.some(r=>this.locationfilter.indexOf(r) >=0))
    } 
    if (this.areafilter.length>0){
      this.filteredAnimals = this.filteredAnimals.filter((animal: Animal )=>
      this.areafilter.includes(animal.zoolocation))
    } 
  }

  getAnimalIndex(animal: Animal): Number {
    return this.animals?.indexOf(animal)!
  }
}


