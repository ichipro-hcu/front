<script>
    import { Card, Dropdown, DropdownItem, Avatar, Button, Label, Select } from 'flowbite-svelte';
    let faculty = -1;
    let faculties = [
        { value: -1, name: '（選択なし）'},
        { value: 1, name: '国際学部'},
        { value: 2, name: '情報科学部'},
        { value: 3, name: '芸術学部'},
        { value: 5, name: '国際学研究科'},
        { value: 6, name: '情報科学研究科'}, 
        { value: 7, name: '芸術学研究科'},
        { value: 8, name: '平和学研究科'}
    ]

    const informaticsDepartments = [
        { value: -1, name: '（選択なし）'},
        { value: 0, name: '（学部配属）'},
        { value: 6, name: '情報工学'},
        { value: 7, name: '知能工学'},
        { value: 8, name: 'システム工学'},
        { value: 9, name: '医用情報科学'}
    ]
    const artBachelorDepartments = [
        { value: -1, name: '（選択なし）'}, 
        { value: 1, name: '美術'},
        { value: 2, name: 'デザイン工芸'}
    ]
    const artMasterDepartments = [
        { value: -1, name: '（選択なし）'}, 
        { value: 1, name: '絵画'},
        { value: 2, name: '彫刻'},
        { value: 0, name: '造形芸術'},
    ]
    const InternationalDepartments = [
        { value: -1, name: '（選択なし）'}, 
        { value: 1, name: '国際学科'}
    ]
    const otherDepartments = [
        { value: -1, name: '（選択なし）'}
    ]

    let department = -1;
    let departments = otherDepartments

    $: if (faculty == 1 || faculty == 5) {
        departments = InternationalDepartments
    } else if (faculty == 3) {
        departments = artBachelorDepartments
    } else if (faculty == 7) {
        departments = artMasterDepartments
    } else if (faculty == 2 || faculty == 6) {
        departments = informaticsDepartments
    } else {
        departments = otherDepartments
    }

    let year = -1;
    const years = [
        {value: -1, name: '（選択なし）'},
        {value: 2018, name: '2018'},
        {value: 2019, name: '2019'},
        {value: 2020, name: '2020'},
        {value: 2021, name: '2021'},
        {value: 2022, name: '2022'},
        {value: 2023, name: '2023'},
        {value: 2024, name: '2024'},
        {value: 2025, name: '2025'},
    ]

    let grade = -1
    const grades = [
        {value: -1, name: '（選択なし）'},
        {value: 1, name: 'B1'},
        {value: 2, name: 'B2'},
        {value: 3, name: 'B3'},
        {value: 4, name: 'B4'},
        {value: 5, name: 'M1'},
        {value: 6, name: 'M2'}
    ]

</script>

<Card class="my-3 max-w-none">
    <div class="flex justify-between align-middle">
        <h2>学生情報</h2>
        <Button>保存</Button>
    </div>
    <div class="m-3">
        <Label>
            入学年
            <Select class="mt-2" items={years} bind:value={year} />
        </Label>
    </div>
    <div class="m-3">
        <Label>
            学部
            <Select class="mt-2" items={faculties} bind:value={faculty} />
        </Label>
    </div>
    <div class="m-3">
        <Label>
            学科
            <Select class="mt-2" items={departments} bind:value={department} />
        </Label>
    </div>
    <div class="m-3">
        <Label>
            学年
            <Select class="mt-2" items={grades} bind:value={grade} />
        </Label>
    </div>
</Card>
