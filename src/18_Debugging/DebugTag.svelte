<script>
    let user = {
        firstname: 'Ada',
        lastname: 'Lovelace'
    };
</script>

<input bind:value={user.firstname}>
<input bind:value={user.lastname}>

<!--{(console.log(user), '')}-->
{@debug user}<!--TODO now to just work on an app using svelte as the UI framework-->
<h1>Hello, (user.firstname}!</h1>