<script>
    import { Button, Modal } from 'flowbite-svelte';
    let openLoginModalState = true
    let hiring = ["クラウドサービス", "リバースプロキシ", "Svelte", "人間関係", "広島市立大学", "日本語", "共同開発", "アイコンとか，デザインとか"]
</script>

<Modal title="段々と実装されていきます・・・" bind:open={openLoginModalState} autoclose>
    <p>この機能は「まだ」実装されていません．しばらくお待ち下さい．</p>
    <svelte:fragment slot="footer">
        <p class="text-sm text-gray-500">
            <span class="font-bold">「{ hiring[Math.floor(Math.random() * hiring.length)] }」</span> に詳しい人間を探しています．
            <a class="text-blue-500" href="https://forms.gle/tQJGE5qpCdD3gMbt9">お問い合わせ</a>
        </p>
    </svelte:fragment>
</Modal>
