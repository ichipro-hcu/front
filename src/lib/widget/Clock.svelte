<script>
    import { onMount } from 'svelte';
    import { Card } from 'flowbite-svelte';
    import { browser } from '$app/environment';
    import AttendModal from '$lib/dialog/AttendModal.svelte';

    let time = new Date();

    onMount(() => {
        if (browser) {
            const interval = setInterval(() => {
                time = new Date();
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        }
    });

    let openAttendModalState = false
</script>

<Card class="w-12/12 max-w-none" on:click={() => (openAttendModalState = true)}>
    <span class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center" id="main-clock">{time.toLocaleTimeString()}</span>
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight text-center" id="main-date">{time.toLocaleDateString()}</p>  
</Card>

<AttendModal bind:open={openAttendModalState}></AttendModal>
