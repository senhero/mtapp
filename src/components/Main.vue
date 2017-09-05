<template>
	<div class="mian_wrapper">
		<v-header></v-header>
		<v-nav></v-nav>
		<v-add></v-add>
		<v-hd></v-hd>
        <v-business></v-business>
        <v-footer></v-footer>
	</div>
</template>
<script>


	import header from '@/components/Header'
	import nav from '@/components/Nav'
	import hd from '@/components/Hd'
	import add from '@/components/Add'
	import businessList from '@/components/BusinessList'
	import footer from '@/components/Footer'
	export default {
		name: "main",
		methods: {

		},
		components: {
			'v-header': header,
			'v-nav': nav,
			'v-hd': hd,
			'v-add': add,
			"v-business": businessList,
			"v-footer": footer,
		}
	}
</script>
<style lang="scss">
	.mian_wrapper {
		padding-bottom: .8rem;
	}
</style>