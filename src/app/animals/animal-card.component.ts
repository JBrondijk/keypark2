import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Animal } from './animals.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-animal-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css']
})
export class AnimalCardComponent {
  @Input() animal!: Animal;
  @Input() index!: Number;
}
