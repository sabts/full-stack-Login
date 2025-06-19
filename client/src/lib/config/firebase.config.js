// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAjRatyW3brDsNBvVFVboTtaELbp16LSuU',
	authDomain: 'full-stack-login-4d6aa.firebaseapp.com',
	projectId: 'full-stack-login-4d6aa',
	storageBucket: 'full-stack-login-4d6aa.firebasestorage.app',
	messagingSenderId: '358542133575',
	appId: '1:358542133575:web:c650e426558ec667ebe462'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
