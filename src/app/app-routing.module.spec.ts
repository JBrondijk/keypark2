import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { routes } from './app-routing.module';

describe('App routing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
    });
  });

  it('uses hash-based routing to keep direct URLs stable', () => {
    const strategy = TestBed.inject(LocationStrategy);

    expect(strategy instanceof HashLocationStrategy).toBeTrue();
  });

  it('redirects the empty path to home', async () => {
    const router = TestBed.inject(Router);

    await router.navigateByUrl('');

    expect(router.url).toBe('/home');
  });
});
