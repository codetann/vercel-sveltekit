<script lang="ts">
	import { onMount } from 'svelte';

	let value: string = '';
	let placeholder: string = 'New York City';
	let isVisible: boolean = true;

	function submit(e) {
		e.preventDefault();
	}

	function resetValue() {
		value = '';
	}

	// onMount(() => {
	// 	setInterval(() => {
	// 		if (placeholder === 'New York City') return (placeholder = 'Salt Lake City');
	// 		if (placeholder === 'Salt Lake City') return (placeholder = 'New York City');
	// 	}, 2000);
	// });

	$: if (value.length >= 1) {
		isVisible = false;
	} else {
		isVisible = true;
	}
</script>

<form action="submit" on:submit={submit}>
	<input bind:value class="input-primary" type="text" {placeholder} />
	<button on:click={resetValue} class:isHidden={isVisible} class="fas fa-times btn" />
</form>

<style lang="postcss">
	/* TODO: fix outline/ring/border input focus*/
	form {
		@apply flex bg-neutral rounded-md;
	}
	input {
		@apply bg-neutral  rounded-md pl-2 transition-all duration-200 rounded-l-lg rounded-r-none;
		@apply hover:bg-black hover:bg-opacity-50;
		@apply focus:border-none focus:ring-0 focus:ring-offset-0 focus:outline-none;
	}
	input::placeholder {
		@apply opacity-40;
	}
	button {
		@apply rounded-l-none;
	}
	.isHidden {
		opacity: 0;
	}
</style>
