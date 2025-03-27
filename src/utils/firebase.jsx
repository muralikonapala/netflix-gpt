/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCChDyS3CugLmQhnXMmPQLyWqxTjqZnFx4',
  authDomain: 'netflix-gpt-bbf84.firebaseapp.com',
  projectId: 'netflix-gpt-bbf84',
  storageBucket: 'netflix-gpt-bbf84.firebasestorage.app',
  messagingSenderId: '1072653227286',
  appId: '1:1072653227286:web:6ad3556c7a3dd4eb24ac37',
  measurementId: 'G-6LHV7P6P7Z',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
