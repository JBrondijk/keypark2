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
    this.isMobile = window.innerWidth < 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    this.isMobile = event.target.innerWidth < 768;
  }

  collapseNavbar() {
    const navbar: HTMLElement = document.getElementById('myNavbar')!;
    navbar.classList.remove('show');
  }

  isNotMobile() {
    return window.innerWidth >= 768;
  }
}
