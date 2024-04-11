import { Component } from '@angular/core';
import { AnimalsService } from './animals/animals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private animalsService : AnimalsService){}
  title = 'keypark2';
}
