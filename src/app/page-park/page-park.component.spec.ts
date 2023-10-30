import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageParkComponent } from './page-park.component';

describe('PageParkComponent', () => {
  let component: PageParkComponent;
  let fixture: ComponentFixture<PageParkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PageParkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
