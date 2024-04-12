import { Component, HostListener, OnInit } from '@angular/core';
import { AnimalsService } from './animals/animals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isMobile: boolean = false;
  constructor(private animalsService : AnimalsService){}
  title = 'keypark2';

  ngOnInit(){
    this.isMobile = window.innerWidth < 992;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    this.isMobile = event.target.innerWidth < 992;
  }

  collapseNavbar() {
    const navbar: HTMLElement = document.getElementById('myNavbar')!;
    navbar.classList.remove('show');
  }
}
