/// <reference types="@sveltejs/kit" />

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    'on:click_outside'?: (event: CustomEvent) => void;
  }
}
