<template>
	<div class="header" ref="headerTop">
		<header-search></header-search>
		<header-banner></header-banner>
	</div>
</template>
<script>
	import search from '@/components/Search'
	import banner from '@/components/Banner'

	export default {
		name: 'header',
		
		components: {
			'headerBanner':banner,
			'headerSearch':search
		}
	}
</script>
<style lang="scss">
	.header {
		height: 2.2rem;
		position: relative;
		background: skyblue;
	}
	
</style>