<script>
    import "../tailwind.css";
    import Nav from "$lib/Nav.svelte";
</script>
<div class="h-full max-h-full">
    <Nav />
    <div class="container mx-auto h-full">
        <slot />
    </div>
</div>