import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YakComponent } from './yak.component';

describe('YakComponent', () => {
  let component: YakComponent;
  let fixture: ComponentFixture<YakComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [YakComponent]
    });
    fixture = TestBed.createComponent(YakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
