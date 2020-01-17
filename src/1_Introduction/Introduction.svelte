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
    import ElseBlocks from "../4_Logic/ElseBlocks.svelte";
    import ElseIfBlocks from "../4_Logic/ElseIfBlocks.svelte";
    import EachBlocks from "../4_Logic/EachBlocks.svelte";
    import KeyedEachBlocks from "../4_Logic/KeyedEachBlocks.svelte";
    import AwaitBlocks from "../4_Logic/AwaitBlocks.svelte";
    import DOMEvents from "../5_Events/DOMEvents.svelte";

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
<ElseBlocks/>
<ElseIfBlocks/>
<EachBlocks/>
<KeyedEachBlocks/>
<AwaitBlocks/>
<DOMEvents/>