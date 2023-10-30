import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable, Subscription } from 'rxjs';
import { Animal, AnimalsService } from './animals.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal-view.component.html',
  styleUrls: ['./animal-view.component.css']
})
export class AnimalViewComponent implements OnInit, OnDestroy {
  animal$!: Observable<Animal | undefined>;
  loading = true;
  subscriptions: Subscription = new Subscription;

  constructor(private animalsService: AnimalsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.animalsService.getSheetData().subscribe(data =>{
        this.animal$ = this.route.paramMap.pipe(map(params => {
          this.loading = false;
          return this.animalsService.sheetDataToArray(data)[Number(params.get('index'))]
        }))
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
