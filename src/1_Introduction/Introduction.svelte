<script>
    import DynamicAttributes from "./DynamicAttributes.svelte";
    import StylingExample from "./StylingExample.svelte";
    import HTMLTags from "./HTMLTags.svelte";
    import Assignments from "../2_Reactivity/Assignments.svelte";
    import Declarations from "../2_Reactivity/Declarations.svelte";
    import Statements from "../2_Reactivity/Statements.svelte";
    import UpdatingArraysAndObjects from "../2_Reactivity/UpdatingArraysAndObjects.svelte";
    import DeclaringProps from "../3_Props/DeclaringProps.svelte";
    import SpreadProps from "../3_Props/SpreadProps.svelte";
    import IfBlocks from "../4_Logic/IfBlocks.svelte";

    let name = 'world';
</script>
<h1>Introduction</h1>
<p>Hello {name}</p>
<DynamicAttributes/>
<StylingExample/>
<HTMLTags/>
<Assignments/>
<Declarations/>
<Statements/>
<UpdatingArraysAndObjects/>
<DeclaringProps/>
<SpreadProps/>
<IfBlocks/>