<script>
    let cats = [
        {id: 'J---aiyznGQ', name: 'Keyboard Cat'},
        {id: 'z_AbfPXTKms', name: 'Maru'},
        {id: 'OUtn3pvWmpg', name: 'Henri the Existential Cat'}
    ];
</script>
<h1>The Famous Cats of Youtube</h1>
<ul>
    {#each cats as cat}
    <li>
        <a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
            {cat.name}
        </a>
    </li>
    {/each}
</ul>

<ul>
    {#each cats as cat, i}
        <li>
            <a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
                {i + 1}: {cat.name}
            </a>
        </li>
    {/each}
</ul>