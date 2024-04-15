import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalViewComponent } from './animals/animal-view.component';
import { AnimalsListComponent } from './animals/animals-list.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LocalComponent } from './page-education/local/local.component';
import { NoPandaPetsComponent } from './page-education/no-panda-pets/no-panda-pets.component';
import { PageEducationComponent } from './page-education/page-education.component';
import { UfunguoComponent } from './page-education/ufunguo/ufunguo.component';
import { BirthdaysComponent } from './page-groups/birthdays/birthdays.component';
import { BusinessComponent } from './page-groups/business/business.component';
import { PageGroupsComponent } from './page-groups/page-groups.component';
import { SchoolsComponent } from './page-groups/schools/schools.component';
import { PageImpressionComponent } from './page-park/page-impression/page-impression.component';
import { PageMapComponent } from './page-park/page-map/page-map.component';
import { PageParkComponent } from './page-park/page-park.component';
import { AdresComponent } from './page-visitor-info/adres/adres.component';
import { ContactComponent } from './page-visitor-info/contact/contact.component';
import { PageVisitorInfoComponent } from './page-visitor-info/page-visitor-info.component';
import { PracticalInformationComponent } from './page-visitor-info/practical-information/practical-information.component';
import { SubscriptionsComponent } from './page-visitor-info/subscriptions/subscriptions.component';
import { TicketsReservationsComponent } from './page-visitor-info/tickets-reservations/tickets-reservations.component';
import { YoutubeComponent } from './page-visitor-info/youtube/youtube.component';
import { YakComponent } from './page-education/yak/yak.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path:'home', component: HomeComponentComponent},
  {path: 'park/animals/:index', loadComponent: () => import('./animals/animal-view.component').then(m => m.AnimalViewComponent)},
  {path: 'education', component: PageEducationComponent},
  {path: 'education/yak', component: YakComponent},
  {path: 'education/ufunguo', component: UfunguoComponent},
  {path: 'education/no-panda-pets', component: NoPandaPetsComponent},
  {path: 'education/local', component: LocalComponent},
  {path: 'park', component: PageParkComponent},
  {path: 'park/animals', component: AnimalsListComponent},
  {path: 'park/map', component:PageMapComponent},
  {path: 'park/impression', component:PageImpressionComponent},
  {path: 'info', component: PageVisitorInfoComponent},
  {path: 'info/adres', component: AdresComponent},
  {path: 'info/tickets', component: TicketsReservationsComponent},
  {path: 'info/subscriptions', component: SubscriptionsComponent},
  {path: 'info/practical', component: PracticalInformationComponent},
  {path: 'info/contact', component: ContactComponent},
  {path: 'info/youtube', component: YoutubeComponent},
  {path: 'groups', component: PageGroupsComponent},
  {path: 'groups/business', component: BusinessComponent},
  {path: 'groups/schools', component: SchoolsComponent},
  {path: 'groups/birthdays', component: BirthdaysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
