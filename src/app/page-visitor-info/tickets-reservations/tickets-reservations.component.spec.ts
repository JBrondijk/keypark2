import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsReservationsComponent } from './tickets-reservations.component';

describe('TicketsReservationsComponent', () => {
  let component: TicketsReservationsComponent;
  let fixture: ComponentFixture<TicketsReservationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TicketsReservationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketsReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
