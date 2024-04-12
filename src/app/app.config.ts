import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({ 
    "projectId": "simple-crm-1f01a",
    "appId": "1:30028285876:web:e6dee118e825c793e254e1",
    "storageBucket": "simple-crm-1f01a.appspot.com",
    "apiKey": "AIzaSyAv-6dvRKKYHyShuGl5lDNjs1dmA8AWzvE",
    "authDomain": "simple-crm-1f01a.firebaseapp.com",
    "messagingSenderId": "30028285876" }))),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    importProvidersFrom(provideStorage(() => getStorage()))]
};
