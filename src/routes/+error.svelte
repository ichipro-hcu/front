<script>
    import { page } from '$app/stores';
</script>


<div class="text-center">
    <img src="/assets/error/error.png" alt="エラーのイラスト" class="m-auto">
    <p>エラーが発生しました。</p>
    <p class="text-gray-400">Status Code: {$page.status}, Error Detail: {$page.error ? $page.error.message : 'No error details available'}</p>
    <p class="text-gray-400 text-sm">Illust: <a href="https://www.irasutoya.com/2015/07/blog-post_993.html">いらすとや</a></p>
</div>

