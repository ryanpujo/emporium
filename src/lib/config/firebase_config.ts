import { browser } from '$app/environment';
import authStore from '$lib/stores/authStore';
import {
	initializeApp,
	type FirebaseOptions,
	getApp,
	getApps,
	type FirebaseApp
} from 'firebase/app';
import {} from 'firebase/app';
import { getAuth, onAuthStateChanged, type Auth, type Unsubscribe, type User } from 'firebase/auth';

let firebaseApp: FirebaseApp;
let auth: Auth;

const config: FirebaseOptions = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID
};

export function getFirebaseAuth() {
	auth = getAuth(getFirebaseApp());
	auth.useDeviceLanguage();

	return auth;
}

function onAuthStateChangedHandler(user: User | null) {
	if (user) {
		authStore.set({
			isLoggedIn: user != null,
			user: user
		});
	} else {
		authStore.set({
			isLoggedIn: user != null,
			user: user
		});
	}
}

function getFirebaseApp() {
	const firebaseAppConfig = getFirebaseConfig();
	if (getApps.length === 0) {
		firebaseApp = initializeApp(firebaseAppConfig);
	} else {
		firebaseApp = getApp();
	}
	return firebaseApp;
}

function getFirebaseConfig() {
	if (!config || !config.apiKey) {
		throw new Error(
			'No Firebase configuration object provided.' +
				'\n' +
				"Add your web app's configuration object to firebase-config.js"
		);
	} else {
		return config;
	}
}
