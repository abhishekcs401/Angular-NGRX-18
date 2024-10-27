import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AssociateReducer } from './Store/Associate/Associate.Reducer';
import { AssociateEffects } from './Store/Associate/Associate.Effects';
import { AppEffects } from './Store/Common/App.Effects';
import { blogReducer } from './Store/Blog/Blog.Reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideAnimationsAsync(), provideHttpClient(), provideStore({ associate: AssociateReducer, blog: blogReducer }), provideEffects([AssociateEffects,AppEffects]), provideRouterStore(), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
