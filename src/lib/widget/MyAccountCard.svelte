<script lang="ts">
  import { Card, Dropdown, DropdownItem, Avatar, Button } from 'flowbite-svelte';
  import { DotsHorizontalOutline } from 'flowbite-svelte-icons';
  import LoginModal from '$lib/dialog/LoginModal.svelte';
  import { getUserBasicInformation } from '$lib/api/auth';
  import { onMount } from 'svelte';

  let openLoginModalState = false
  let userAccountResult: Promise<any>;
  onMount(async () => {
    userAccountResult = await getUserBasicInformation()
  })
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
      {#await userAccountResult}
        <Avatar size="lg" />
        <h5 class="my-3 mb-1 text-xl font-medium text-gray-900 dark:text-white">読み込み中</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">読み込み中</span>
        <div class="flex mt-4 space-x-3 w-8/12 lg:mt-6">
          <Button class="w-full" on:click={() => (openLoginModalState = true)}>ログイン</Button>
        </div>
      {:then resolveData}
        <Avatar size="lg" src={resolveData["result"]["AvatarURL"]}/>
        <h5 class="my-3 mb-1 text-xl font-medium text-gray-900 dark:text-white">{resolveData["result"]["ID"]}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{resolveData["result"]["Email"]}</span>
        <div class="flex mt-4 space-x-3 w-8/12 lg:mt-6">
          <Button class="w-full" on:click={() => (openLoginModalState = true)}>別のアカウントにログイン</Button>
        </div>
      {:catch error}
        <Avatar size="lg" />
        <h5 class="my-3 mb-1 text-xl font-medium text-gray-900 dark:text-white">エラー</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Error</span>
        <div class="flex mt-4 space-x-3 w-8/12 lg:mt-6">
          <Button class="w-full" on:click={() => (openLoginModalState = true)}>ログイン</Button>
        </div>
      {/await}
    </div>
  </Card>

<LoginModal openLoginModalState={openLoginModalState}/>
  