import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any)['CESIUM_BASE_URL'] = '/assets/cesium/';
