<script>

    let value = "";
    let count = 1;
    let datapromise;

    async function fetchData(){
        // /api/list/[numberWords]/index.js
        const response = await fetch(`/api/list/${count}`)
        return await response.json();
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