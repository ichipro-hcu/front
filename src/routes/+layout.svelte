<script>
    import "../app.css";
    import BottomNavigation from "$lib/base/BottomNavigation.svelte";
</script>

<style>
    main {
        max-width: 38rem;
        padding: 2rem;
        margin: auto;
    }

</style>

<main class="overflow-y-auto">
    <slot></slot>
</main>

<BottomNavigation></BottomNavigation>
