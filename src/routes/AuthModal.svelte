<script lang="ts">
	import { getFirebaseAuth } from '$lib/config/firebase_config';
	import { FirebaseError } from 'firebase/app';
	import { signInWithEmailAndPassword } from 'firebase/auth';
  import { Modal } from 'flowbite-svelte';
	import SignInForm from './SignInForm.svelte';
  export let formModal = false;
  let authenticating = false;
  let errMessage: string | null;
  async function handleSignIn(event: CustomEvent) {
    const auth = getFirebaseAuth();
    authenticating = true;
    try {
      const cred = await signInWithEmailAndPassword(auth, event.detail.email, event.detail.password);
      formModal = false;
      errMessage = null;
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error.code);
        switch (error.code) {
          case "auth/invalid-login-credentials":
            errMessage = "invalid credential";
            break;
          case "auth/invalid-email":
            errMessage = "invalid email";
            break;
          case "auth/missing-password":
            errMessage = "password is empty";
            break;
          case "auth/missing-email":
            errMessage = "email is empty";
            break;
          default:
            break;
        }
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
  <SignInForm on:signIn={handleSignIn} {errMessage} />
  {/if}
</Modal>