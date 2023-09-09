<script lang="ts">
	import { getFirebaseAuth } from '$lib/config/firebase_config';
	import { FirebaseError } from 'firebase/app';
	import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
  import { Modal } from 'flowbite-svelte';
	import SignInForm from './SignInForm.svelte';
	import RegistrationForm from './RegistrationForm.svelte';
	import { getFirebaseErrorMessage } from '$lib/error';
  export let formModal = false;
  let authenticating = false;
  let errMessage: string | null;
  let register = false;
  async function handleSignIn(event: CustomEvent) {
    const auth = getFirebaseAuth();
    authenticating = true;
    try {
      await signInWithEmailAndPassword(auth, event.detail.email, event.detail.password);
      formModal = false;
      errMessage = null;
    } catch (error) {
      if (error instanceof FirebaseError) {
        errMessage = getFirebaseErrorMessage(error.code);
      }
    }
    authenticating = false;
  }
  async function handleSignUp(event: CustomEvent) {
    const auth = getFirebaseAuth();
    authenticating = true;
    try {
      await createUserWithEmailAndPassword(auth, event.detail.email, event.detail.password);
      formModal = false;
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error.code);
        errMessage = getFirebaseErrorMessage(error.code);
      }
    }
    authenticating = false;
  }
</script>

<Modal bind:open={formModal} size="xs" autoclose={false} class="w-full">
  {#if authenticating}
  <div class="flex justify-center">
    <span class="loading loading-spinner loading-lg"></span>
  </div>
  {:else}
  {#if register}
  <RegistrationForm on:signup={handleSignUp} {errMessage} />
  <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
    already have an account? <button on:click={() => {
      register = false;
      errMessage = null;
    }} class="text-primary-700 hover:underline link link-primary"> Sign in </button>
  </div>
  {:else}
  <SignInForm on:signIn={handleSignIn} {errMessage} />
  <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
    Not registered? <button on:click={() => {
      errMessage = null;
      register = true;
    }} class="text-primary-700 hover:underline link link-primary"> Create account </button>
  </div>
  {/if}
  {/if}
</Modal>