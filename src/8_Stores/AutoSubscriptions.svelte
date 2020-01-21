<script>
    import { count } from './sub/stores';
    import Incrementer from './sub/Incrementer.svelte';
    import Decrementer from './sub/Decrementer.svelte';
    import Resetter from './sub/Resetter.svelte';

    /*let count_value;

    const unsubscribe = count.subscribe(value => {
        count_value = value;
    });*/
</script>

<h1>The count is {$count}</h1>
<Incrementer/>
<Decrementer/>
<Resetter/>