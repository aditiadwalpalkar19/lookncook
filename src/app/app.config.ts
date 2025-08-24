import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms'; // correct import path

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideHttpClient(),
    importProvidersFrom(FormsModule),
  ],
};

export const firebaseConfig = {
  apiKey: 'AIzaSyAWPmrNEf0RmxKYzzf2K6nh-QKtB9VOcAI',
  authDomain: 'lookncook-e7dfe.firebaseapp.com',
  projectId: 'lookncook-e7dfe',
  storageBucket: 'lookncook-e7dfe.firebasestorage.app',
  messagingSenderId: '237519747313',
  appId: '1:237519747313:web:6ea0feaf79ecd463751150',
};
