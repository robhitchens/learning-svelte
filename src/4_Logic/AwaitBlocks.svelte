<script>
    let promise = getGoogleCom();
    async function getGoogleCom(){
        const res = await fetch('favicon.png');
        const text = await res.text();

        if(res.ok){
            return text;
        } else {
            throw new Error(text);
        }
    }
    function handleClick(){
        promise = getGoogleCom();
    }
</script>
<button on:click={handleClick}>
    generate favicon.png byte code
</button>
{#await promise}
<p>...Waiting</p>
{:then text}
<!--<p>Result is: {text}</p>-->
    <img src="data:image/png;base64, [{text}]"/>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}