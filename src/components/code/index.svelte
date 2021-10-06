<script>
	import { onMount } from 'svelte';

	let i = 0;
	let speed = 40;
	let currOne = '';
	let txtOne = 'const name = "Tanner Thomas"';

	function typeOne() {
		if (i < txtOne.length) {
			currOne += txtOne.charAt(i);
			i++;
			setTimeout(typeOne, speed);
		}
	}

	onMount(() => {
		typeOne();
	});
</script>

<div class="mockup-code w-96">
	<pre
		class="flex"
		data-prefix="1">
  {#if i < txtOne.length}
     <code>{currOne}</code>
  {:else}
    <code class=" text-blue-300">const</code>
    <code class=" text-purple-400">{' '}name</code>
    <code class=" text-red-400">{' '}=</code>
    <code class="text-yellow-300">{' '}"Tanner Thomas"</code>
    <code>;</code>
  {/if}
  </pre>
</div>
