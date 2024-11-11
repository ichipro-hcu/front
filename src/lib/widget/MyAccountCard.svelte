<script lang="ts">
  import { Card, Dropdown, DropdownItem, Avatar, Button } from 'flowbite-svelte';
  import { DotsHorizontalOutline } from 'flowbite-svelte-icons';
  import LoginModal from '$lib/dialog/LoginModal.svelte';
  import { getUserBasicInformation } from '$lib/api/auth';
  import { beforeUpdate, onMount } from 'svelte';
  import { browser } from '$app/environment';

  let openLoginModalState = false
  let userAccountResult: any = null;
    
  if (browser) {
    onMount(async () => {
      userAccountResult = await getUserBasicInformation()
    })
  }
</script>
  
<Card padding="md" class="max-w-none">
  <div class="flex justify-end">
    <DotsHorizontalOutline />
    <Dropdown class="w-36">
      <DropdownItem>プロフィール変更</DropdownItem>
      <DropdownItem>アカウント削除</DropdownItem>
    </Dropdown>
  </div>
  <div class="flex flex-col items-center pb-4">
    {#if userAccountResult === null}
    <!-- ローディング中 -->
    <Avatar size="lg" />
    <h5 class="my-3 mb-1 text-xl font-medium text-gray-900 dark:text-white">読み込み中</h5>
    <span class="text-sm text-gray-500 dark:text-gray-400">読み込み中</span>
    <div class="flex mt-4 space-x-3 w-8/12 lg:mt-6">
      <Button class="w-full" on:click={() => (openLoginModalState = true)}>ログイン</Button>
    </div>
  {:else if userAccountResult.success}
    <!-- ログイン成功時 -->
    <Avatar size="lg" src="{userAccountResult.result.AvatarURL}" />
    <h5 class="my-3 mb-1 text-xl font-medium text-gray-900 dark:text-white">
      {userAccountResult.result.ID}
    </h5>
    <span class="text-sm text-gray-500 dark:text-gray-400">
      {userAccountResult.result.Email}
    </span>
    <div class="flex mt-4 space-x-3 w-8/12 lg:mt-6">
      <Button class="w-full" on:click={() => (openLoginModalState = true)}>別のアカウントにログイン</Button>
    </div>
  {:else}
    <!-- 未ログイン時 -->
    <Avatar size="lg" />
    <h5 class="my-3 mb-1 text-xl font-medium text-gray-900 dark:text-white">未ログイン</h5>
    <span class="text-sm text-gray-500 dark:text-gray-400">ログインされていません</span>
    <div class="flex mt-4 space-x-3 w-8/12 lg:mt-6">
      <Button class="w-full" on:click={() => (openLoginModalState = true)}>ログイン</Button>
    </div>
  {/if}
  </div>
</Card>

<LoginModal openLoginModalState={openLoginModalState}/>
  