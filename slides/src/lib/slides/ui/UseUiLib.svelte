<script>
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('ui.use.title')}</h3></Hero>
	<Description>{$t('ui.use.description')}</Description>
	<CodeReference
		file="ng-17-workshop\src\app\shell\shell.component.html"
		lines={{ 16: '10,11', 17: '12,13' }}
	/>
</Slide>
<Slide>
	<Hero><h3>{$t('ui.use.title')}</h3></Hero>
	<CodeReference
		file="ng-17-workshop\src\app\shell\shell.component.ts"
		lines={{ 16: '41-45', 17: '39-43' }}
	/>
</Slide>
<Slide>
	<Hero><h3>{$t('ui.use.title')}</h3></Hero>
	<CodeReference file="ng-17-workshop\src\app\shell\shell.component.scss" />
</Slide>
