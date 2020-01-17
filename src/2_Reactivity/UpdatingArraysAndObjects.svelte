<script>
    let numbers = [1,2,3,4];
    function addNumber(){
        numbers.push(numbers.length+1);
        numbers = numbers;//Note: reassignment required to trigger update.
    }
    $: sum = numbers.reduce((t,n) => t + n, 0);
    /*alternatives*/
    function addNumberExpand(){
        numbers = [...numbers, numbers.length + 1];
    }
    function addNumberReassign(){
        numbers[numbers.length] = numbers.length + 1;
    }
    /*Note: A simple rule of thumb: the name of the updated variable must appear on the left hand side of the assignment.
    * Example:
    * const foo = obj.foo;
    * foo.bar = 'baz';
    * won't update references to obj.foo.bar unless you follow it up with obj = obj
    */
</script>
<p>
    {numbers.join(' + ')} = {sum}
</p>

<button on:click={addNumber}>Add a number</button>