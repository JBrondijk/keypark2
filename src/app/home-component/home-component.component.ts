import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalCardComponent } from '../animals/animal-card.component';
import { Animal, AnimalsService } from '../animals/animals.service';


@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [CommonModule,AnimalCardComponent],
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})


export class HomeComponentComponent {
  constructor(readonly animalsService: AnimalsService){
  }
}
