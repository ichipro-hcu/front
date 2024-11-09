<script>
    import { Button, Modal } from 'flowbite-svelte';
    export let baseUrl = "https://ichipro-api.sasakulab.com/"
    export let openLoginModalState = false
</script>

<Modal title="ログイン" bind:open={openLoginModalState} autoclose>
    <p>ログインに同意した場合，<a href="https://sasakulab.com/termOfService.txt" class="text-blue-400">利用規約</a>に同意することになります．</p>
    <Button class="text-center w-full" href="{baseUrl + "api/v1/user/auth/login"}">ログイン</Button>
</Modal>
