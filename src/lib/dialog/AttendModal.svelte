<script lang="ts">
    'use strict'
    import { getUserAccessFromInformation } from '$lib/api/auth';
    import { Button, Modal } from 'flowbite-svelte';
    import { browser } from '$app/environment';
    import { beforeUpdate, onMount } from 'svelte';

    export let open = false;
    let userAccessfrom: any = null;
    let userAccessfromUniv: string = "せん";
    let accessFromClass: string = "warning"; 

    if (browser) {
        onMount(async () => {
        userAccessfrom = await getUserAccessFromInformation();
        if (userAccessfrom["result"]["is_from_university"] === true) {
            userAccessfromUniv = "す";  
            accessFromClass = "safe";
        } else {
            userAccessfromUniv = "せん";
            accessFromClass = "warning";
            }
        })
  }
</script>

<style>
    .warning {
        background-color: #ecb100;
        color: #fff;
        padding: 10px;
    }
    .safe {
        background-color: #43a800;
        color: #fff;
        padding: 10px;
    }
</style>

<Modal title="出席" bind:open autoclose>
    <p>UNIPA で「出席登録する」を押下するまで出席登録は完了していません。</p>
    <Button class="text-center w-full text-2xl" href="https://ichipol.g.hiroshima-cu.ac.jp/uprx/MobileShibbolethAuthServlet">出席登録</Button>
    <hr>
    <p id="accessFromIndicator" class="safe">広島市立大学からアクセスされていま{userAccessfromUniv}<br />
    Your IP Address: <span>{userAccessfrom?.result?.your_ip}</span></p>
</Modal>
