export function getFirebaseErrorMessage(code: string): string | null {
	let errMessage: string | null = null;
	switch (code) {
		case 'auth/invalid-login-credentials':
			errMessage = 'invalid credential';
			break;
		case 'auth/invalid-email':
			errMessage = 'invalid email';
			break;
		case 'auth/missing-password':
			errMessage = 'password is empty';
			break;
		case 'auth/missing-email':
			errMessage = 'email is empty';
			break;
		case 'auth/email-already-in-use':
			errMessage = 'email already in use';
			break;
		default:
			break;
	}
	return errMessage;
}
