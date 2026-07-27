import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface FundraiserEntry {
  date: string;
  celebration: string;
  amount: number;
  currency: string;
  cause: string;
}

@Component({
  selector: 'app-yak',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './yak.component.html',
  styleUrls: ['./yak.component.scss']
})
export class YakComponent implements OnInit {
  fundraisers: FundraiserEntry[] = [];
  totalRaisedUsd = 0;
  private readonly gbpToUsdRate = 1.27;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<FundraiserEntry[]>('assets/YAK/fundraisers.json').subscribe((data) => {
      this.fundraisers = data;
      this.totalRaisedUsd = this.fundraisers.reduce((sum, fundraiser) => {
        const amountInUsd = fundraiser.currency === '£'
          ? fundraiser.amount * this.gbpToUsdRate
          : fundraiser.amount;

        return sum + amountInUsd;
      }, 0);
    });
  }
}
