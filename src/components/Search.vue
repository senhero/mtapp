<template>
	<div class="header_search_wrap" ref="headerWrap" :class="{'fixedClass': fixedClass}">
		<div class="pos">上海<i class="u-icon u-icon-down fa fa-angle-down fa-lg"></i></div>
		<div class="search_text">
			<i class="u-icon fa fa-search fa-lg u-icon-search"></i>
			<input type="text" placeholder="上海迪斯尼度假区">
		</div>
		<div class="ewm_code">
			<i class="u-icon u-icon-ewm fa-qrcode fa"></i>
			<span>扫码</span>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'search',
		data(){
			return {
				fixedClass: false
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.fixedBind();
			})
		},
		methods: {
			fixedBind(){
				var vm = this;
				var headerWrapEle = this.$refs.headerWrap;
				var headerParent = headerWrapEle.parentNode;
				document.addEventListener('scroll',function(){
					var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
					if(scrollTop > headerParent.offsetHeight - headerWrapEle.offsetHeight){
						vm.fixedClass = true;
					}
					else{
						vm.fixedClass = false;
					}
				})
			}
		}
	}
</script>
<style lang="scss">

	.header_search_wrap {
		position: fixed;
		top: 0px;
		left: 0;
		right: 0;
		max-width: 640px;
		min-width: 320px;
		margin: 0 auto;
		padding: 0 .25rem;
		height: .84rem;
		font-size: .24rem;
		display: flex;
		align-content: space-between;
		align-items: center;
		color: #fff;
		z-index: 50;
		.search_text {
			position: relative;
			flex: 1;
			text-align: center;
			width: 3.8rem;
			margin:0 .27rem;
			height: .48rem;
			border-radius: .24rem;
			background-color: #fff;
			overflow: hidden;
			.u-icon-search {
				position: absolute;
				top: 50%;
				transform: translate(0,-50%);
				left: .17rem;
				color: #595959;
			}
			input[type=text] {
				box-sizing: border-box;
				width: 100%;
				margin-left: .5rem;
				background-color: none;
				border: none;
				font: .24rem/.48rem "微软雅黑";
				color: #595959;
				outline: none;
				&::-webkit-placeholder {
					color: #595959
				}
			}
		}
		.pos{
			.u-icon-down {
				padding-left: .1rem;
			}
		}
		&.fixedClass {
			background-color: #2dc3ad;
		}
	}
</style>