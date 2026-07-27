import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

const params = new URLSearchParams(window.location.search);
const preservedPath = params.get('p');

if (preservedPath) {
  const targetUrl = `${window.location.origin}${preservedPath}`;
  window.history.replaceState({}, '', targetUrl);
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
