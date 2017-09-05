<template>
	<div class="footerFixed">
		<ul>
			<li class="active">
				<i class="u-icon fa fa-home"></i>
				<span>首页</span>
			</li>
			<li>
				<i class="u-icon fa fa-shopping-bag"></i>
				<span>逛一逛</span>
			</li>
			<li>
				<i class="u-icon fa fa-address-card-o"></i>
				<span>订单</span>
			</li>
			<li>
				<i class="u-icon fa fa-cart-plus"></i>
				<span>我的</span>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: "Footer",

	}
</script>
<style lang="scss">
	.footerFixed {
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		background-color: #fff;
		height: .8rem;
		border-top: 1px solid #ede8ec;
		ul{
			display: flex;
		}
		li {
			align-items: center;
			flex: 1;
			height: .8rem;
			text-align: center;
			padding-top: .1rem;
			.fa, span{
				color: #626262;
			}
			.fa {
				padding: 0.05rem 0;
				font-size: .28rem;
			}
			.fa-cart-plus,.fa-home {
				padding: 0;
				font-size: .32rem;
			}
			span {
				line-height: .3rem;
				display: block;
				font-size: .24rem;
			}
			&.active {
				.fa, span {
					color:#06c1ae
				}
			}
		}
	}
</style>