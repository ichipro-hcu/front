<script>
  import { Card, Dropdown, DropdownItem, Avatar, Button } from 'flowbite-svelte';
  import { DotsHorizontalOutline } from 'flowbite-svelte-icons';
  import LoginModal from '$lib/dialog/LoginModal.svelte';

  let openLoginModalState = false
</script>
  
  <Card padding="md" class="max-w-none">
    <div class="flex justify-end">
      <DotsHorizontalOutline />
      <Dropdown class="w-36">
        <DropdownItem>アカウント削除</DropdownItem>
      </Dropdown>
    </div>
    <div class="flex flex-col items-center pb-4">
      <Avatar size="lg" />
      <h5 class="my-3 mb-1 text-xl font-medium text-gray-900 dark:text-white">ユーザー名</h5>
      <span class="text-sm text-gray-500 dark:text-gray-400"></span>
      <div class="flex mt-4 space-x-3 w-8/12 lg:mt-6">
        <Button class="w-full" on:click={() => (openLoginModalState = true)}>ログイン</Button>
      </div>
    </div>
  </Card>

  <LoginModal openLoginModalState={openLoginModalState}/>
  
  