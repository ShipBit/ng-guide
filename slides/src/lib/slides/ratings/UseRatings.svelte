<script>
	import CodeReference from '$lib/CodeReference.svelte';
	import Description from '$lib/Description.svelte';
	import Hero from '$lib/Hero.svelte';
	import Slide from '$lib/Slide.svelte';
	import { t } from '$lib/i18n';
</script>

<Slide>
	<Hero><h3>{$t('ratings.use.title')}</h3></Hero>
	<Description>{$t('ratings.use.description')}</Description>
	<CodeReference file="ng-17-workshop\src\app\app.routes.ts" lines="27-31" />
</Slide>
