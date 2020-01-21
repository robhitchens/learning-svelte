<script>
    /*import {onDestroy} from 'svelte';*/
    import {onInterval} from './util';
    let seconds = 0;
    /*const interval = setInterval(() => seconds += 1, 1000);
    onDestroy(() => clearInterval(interval));*/
    onInterval(() => seconds += 1, 1000);
</script>

<p>
    The page has been open for {seconds} {seconds === 1? 'second' : 'seconds'}
</p>