import { writable } from 'svelte/store';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { getFirebaseAuth } from '$lib/config/firebase_config';

const authStore = writable<{
	isLoggedIn: boolean;
	user?: User | null | undefined;
}>(
	{
		isLoggedIn: false
	},
	(set) => {
		const unsubscribe = onAuthStateChanged(getFirebaseAuth(), (user) => {
			set({
				isLoggedIn: user != null,
				user: user
			});
		});
		return () => unsubscribe();
	}
);

export default {
	set: authStore.set,
	subscribe: authStore.subscribe
};
