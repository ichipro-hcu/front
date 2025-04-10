<script>
  import PendingModal from "$lib/dialog/PendingModal.svelte";
  import { Button, Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell, Checkbox } from "flowbite-svelte";

  let enableStateList = [
    [false, false, false, false, false], // 1時限目
    [false, false, false, false, false], // 2時限目
    [false, false, false, false, false], // 3時限目
    [false, false, false, false, false], // 4時限目
    [false, false, false, false, false], // 5時限目
  ];

</script>

<div class="w-full">
  <h2>出席確認の通知</h2>
  <p>出席確認の通知を行うことができます．</p>
  <Table>
    <TableHead>
      <TableHeadCell>時限</TableHeadCell>
      <TableHeadCell>月</TableHeadCell>
      <TableHeadCell>火</TableHeadCell>
      <TableHeadCell>水</TableHeadCell>
      <TableHeadCell>木</TableHeadCell>
      <TableHeadCell>金</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y">
      {#each enableStateList as row, rowIndex}
      <TableBodyRow>
        <TableBodyCell>{rowIndex + 1}</TableBodyCell>
        {#each row as cell, cellIndex}
          <TableBodyCell>
            <Checkbox bind:checked={enableStateList[rowIndex][cellIndex]}></Checkbox>
          </TableBodyCell>
        {/each}
      </TableBodyRow>
      {/each}
    </TableBody>
  </Table>
</div>
