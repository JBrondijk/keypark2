import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalCardComponent } from '../animals/animal-card.component';
import { AnimalsService } from '../animals/animals.service';

@Component({
  selector: 'app-page-park',
  standalone: true,
  imports: [CommonModule, AnimalCardComponent],
  templateUrl: './page-park.component.html',
  styleUrls: ['./page-park.component.scss']
})
export class PageParkComponent {
  constructor(readonly animalsService: AnimalsService) {
  }
}