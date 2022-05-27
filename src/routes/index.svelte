<script context="module">
    export const load = async ({fetch}) => {
        const res = await fetch("index.json")
        const data = await res.json()
        console.log(data)
        return {
            props: {
                data,
            }
        }
    }
</script>
<h1 class="font-semibold uppercase">HOME</h1>