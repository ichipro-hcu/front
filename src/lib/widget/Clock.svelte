<script>
    import { onMount } from 'svelte';
    import { Card } from 'flowbite-svelte';

    let now = new Date();
    let date = now.toLocaleDateString();
    let time = now.toLocaleTimeString();

    onMount(() => {
        const interval = setInterval(() => {
            now = new Date();
            date = now.toLocaleDateString();
            time = now.toLocaleTimeString();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });
</script>

<Card href="https://ichipol.g.hiroshima-cu.ac.jp/uprx/MobileShibbolethAuthServlet" class="w-12/12 max-w-none">
    <span class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center" id="main-clock">{time}</span>
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight text-center" id="main-date">{date}</p>  
</Card>
