<script>

    let value = "";
    let count = 1;
    let nama = "";
    let nik = "";
    let datapromise;
    let tempdata;

    async function fetchData(){
        // /api/list/[numberWords]/index.js
        const response = await fetch(`/api/list/${count}`)
        return await response.json();
    }
    async function postData(){
        const resdata = await fetch("/api/savedata", {
            method: "POST",
            body: JSON.stringify({
                nama: nama,
                nik: nik,
            }),
        });
        if (!resdata.ok) {
            const pasarMessage = `An error has occured: ${resdata.status}`;
            throw new Error(pasarMessage);
        }else{
            const jsondata = await resdata.json();
            tempdata = jsondata.data
            console.log(jsondata)
		}
    }
</script>
<label for="Start With">
    Start With
    <input class="border-2 border-blue-200" type="text" name="first_chat" bind:value>
</label>
<label >
    Number of words:
    <input class="border-2 border-blue-200" type="number" name="count" bind:value={count}>
</label>
<button
    on:click={() => {
        datapromise = fetchData();
    }}>Submit</button>

<br>
{#if datapromise}
    {#await datapromise}
        loading...
    {:then data}
        <ul>
            {#each data as item }
                <li>{item}</li>
            {/each}
        </ul>
    {/await}
{/if}
<hr>
value : {value}<br />
count : {count}<br />
<br>
<label for="Start With">
    Nama
    <input class="border-2 border-blue-200" type="text" name="name" bind:value={nama}>
</label>
<label >
    nik:
    <input class="border-2 border-blue-200" type="text" name="name" bind:value={nik}>
</label>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
    on:click={() => {
        postData();
    }}>Submit</button>
<br>
{tempdata}