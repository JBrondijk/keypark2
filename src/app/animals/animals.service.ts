import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



export interface Animal {
  name: string;
  scientificName: string;
  description: string;
  photoUrl: string;
  location: string[];
  zoolocation: string;
  iucnStatus: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  constructor(private http: HttpClient) {
    this.getSheetData().subscribe(data=>{
      this.animals=this.sheetDataToArray(data);
    });
   }

  animals : Animal[] = [];
  randomAnimalInt : number | undefined;

  public getSheetData() {
    const url = `https://docs.google.com/spreadsheets/d/e/2PACX-1vSUreuzb559gXP9b3LFQ7vgnc19Yh2wo0APqaOi3JZ3bFNHLBeGcXLvTaMB2CGsnvTYfosk7UeMJOh0/pub?gid=0&single=true&output=csv`; 
    
    return this.http.get(url,{responseType: 'text'})
  }

  public sheetDataToArray(data: string) {
      const animals: Animal[] = [];
      const list = data.split('\n');
      for(let i = 1 ; i<list.length; i++){
        const entry = list[i].split(',');
        animals.push({
          name: entry[0],
          scientificName: entry[1],
          description: entry[2],
          photoUrl: entry[3],
          location: entry[4].split(';'),
          zoolocation: entry[5],
          iucnStatus: entry[6]
        })
      }
      return animals;
  }

  public getRandomAnimalIndex() {
    if (!this.randomAnimalInt){
      this.randomAnimalInt = getRandomInt(this.animals.length);
    } 
    return this.randomAnimalInt;
  }

  public getAllLocations(): string[]{
    let allLocations: string[] = [];
    this.animals.forEach(animal => {
      animal.location.forEach(location =>{
        if(allLocations.indexOf(location) === -1){
          allLocations.push(location);
        }
      })
    });
    return allLocations;
  }
  public getAllZooAreas(): string[]{
    let allAreas: string[] = [];
    this.animals.forEach(animal => {
        if(allAreas.indexOf(animal.zoolocation) === -1){
          allAreas.push(animal.zoolocation);
        }
    });
    return allAreas;
  }
}

function getRandomInt(max:number) {
  return Math.floor(Math.random() * max);
}

