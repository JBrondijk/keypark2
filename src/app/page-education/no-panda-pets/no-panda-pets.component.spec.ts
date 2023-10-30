import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoPandaPetsComponent } from './no-panda-pets.component';

describe('NoPandaPetsComponent', () => {
  let component: NoPandaPetsComponent;
  let fixture: ComponentFixture<NoPandaPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NoPandaPetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoPandaPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
