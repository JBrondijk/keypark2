import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UfunguoComponent } from './ufunguo.component';

describe('UfunguoComponent', () => {
  let component: UfunguoComponent;
  let fixture: ComponentFixture<UfunguoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ UfunguoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UfunguoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
