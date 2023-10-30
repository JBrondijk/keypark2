import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVisitorInfoComponent } from './page-visitor-info.component';

describe('PageVisitorInfoComponent', () => {
  let component: PageVisitorInfoComponent;
  let fixture: ComponentFixture<PageVisitorInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PageVisitorInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageVisitorInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
