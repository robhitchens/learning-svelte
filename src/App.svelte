<script>
	import Introduction from "./1_Introduction/Introduction.svelte";
	import CustomCSSTransition from "./10_Transitions/CustomCSSTransition.svelte";
	import CustomJSTransition from "./10_Transitions/CustomJSTransition.svelte";
	import TransitionEvents from "./10_Transitions/TransitionEvents.svelte";
	import LocalTransition from "./10_Transitions/LocalTransition.svelte";
	import DeferredTransition from "./10_Transitions/DeferredTransition.svelte";
	import AnimateDirective from "./11_Animations/AnimateDirective.svelte";
	import UseDirective from "./12_Actions/UseDirective.svelte";
	import ActionsAddingParameters from "./12_Actions/ActionsAddingParameters.svelte";
	import ClassDirective from "./13_Classes/ClassDirective.svelte";
	import ShorthandClassDirective from "./13_Classes/ShorthandClassDirective.svelte";
	import Slots from "./14_ComponentComposition/Slots.svelte";
	import SlotFallbacks from "./14_ComponentComposition/SlotFallbacks.svelte";
	import NamedSlots from "./14_ComponentComposition/NamedSlots.svelte";
	import SlotProps from "./14_ComponentComposition/SlotProps.svelte";
	import SetContextGetContext from "./15_ContextAPI/SetContextGetContext.svelte";
	import SvelteSelf from "./16_SpecialElements/SvelteSelf.svelte";
	import SvelteComponent from "./16_SpecialElements/SvelteComponent.svelte";
	import SvelteWindow from "./16_SpecialElements/SvelteWindow.svelte";
	import SvelteWindowBindings from "./16_SpecialElements/SvelteWindowBindings.svelte";
	import SvelteBody from "./16_SpecialElements/SvelteBody.svelte";
	import SvelteHead from "./16_SpecialElements/SvelteHead.svelte";
	import SvelteOptions from "./16_SpecialElements/SvelteOptions.svelte";
	import SharingCode from "./17_ModuleContext/SharingCode.svelte";
	import Exports from "./17_ModuleContext/Exports.svelte";

	export let name;
</script>
<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
<Introduction/>
<!--<DynamicAttributes/>
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
<EventModifiers/>
<ComponentEvents/>
<EventForwarding/>
<DomEventForwarding/>
<TextInputs/>
<NumericInputs/>
<CheckboxInputs/>
<GroupInputs/>
<TextareaInputs/>
<SelectBindings/>
<SelectMultiple/>
<ContentEditableBindings/>
<EachBlockBindings/>
<MediaElements/>
<Dimensions/>
<This/>
<ComponentBindings/>
<OnMount/>
<OnDestroy/>
<BeforeAfterUpdate/>
<Tick/>
<WritableStore/>
<AutoSubscriptions/>
<ReadableStore/>
<DerivedStore/>
<ComponentStore/>
<StoreBinding/>
<Tweened/>
<Spring/>
<TheTransitionDirective/>
<AddingParameters/>
<InAndOut/>-->
<!--<CustomCSSTransition/>
<CustomJSTransition/>
<TransitionEvents/>
<LocalTransition/>
<DeferredTransition/>
<AnimateDirective/>
<UseDirective/>
<ActionsAddingParameters/>
<ClassDirective/>
<ShorthandClassDirective/>-->
<!--
<Slots/>
<SlotFallbacks/>
<NamedSlots/>
<SlotProps/>-->
<!--<SetContextGetContext/>-->
<!--<SvelteSelf/>-->
<!--<SvelteComponent/>-->
<!--<SvelteWindow/>-->
<!--<SvelteWindowBindings/>-->
<!--<SvelteBody/>-->
<SvelteHead/>
<SvelteOptions/>
<!--
<SharingCode/>-->
<Exports/>
