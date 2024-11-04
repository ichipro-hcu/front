<script>
    import { Button, Modal } from 'flowbite-svelte';
    let openLoginModalState = true
</script>

<Modal title="ログイン" bind:open={openLoginModalState} autoclose>
    <p>ログインに同意した場合，<a href="https://sasakulab.com/termOfService.txt" class="text-blue-400">利用規約</a>に同意することになります．</p>
    <Button class="text-center w-full">ログイン</Button>
</Modal>
