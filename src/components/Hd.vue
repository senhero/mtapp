<template>
	<div class="list_hd">
		<div class="list_item">
			<a href="" class="list_gou">
				<span class="info">
					<strong>我们约吧</strong>
					<small>恋人家人好朋友</small>
				</span>
				<span class="imgBox">
					<img src="/src/images/img1.png" style="height:100%;" alt="">
				</span>
			</a>
			<a href="" class="list_gou huilife">
				<span class="info">
					<strong>低价超值</strong>
					<small>十元惠生活</small>
				</span>
				<span class="imgBox">
					<img src="/src/images/img2.jpg" style="height:100%;"  alt="">
				</span>
			</a>
			<a href="" class="list_gou sence">
				<span class="info">
					<strong>午后时光</strong>
					<small>懒懒下午茶</small>
				</span>
				<span class="imgBox">
					<img src="/src/images/img3.png" style="height:100%;"  alt="">
				</span>
			</a>
		</div>
	</div>
</template>
<script>
	export default {
		name: "Hd",
	}
</script>
<style lang="scss">
	.list_hd {
		height: auto;
		overflow: hidden;
		background-color: #fff;
		border-top: 1px solid #ddd;
		border-bottom: 1px solid #ddd;
		.list_item {
			padding: .12rem 0;
			display: flex;
			a{
				height: 2rem;
				flex: 1;
				border-right: 1px solid #ddd;
				text-align: center;
				&:last-of-type{
					border: none;
				}
			}
			.info {
				display: inline-block;
				margin-bottom: .12rem;
				strong {
					display: block;
    				color: #55a40f;
    				font-size: .3rem;
    				margin: .12rem 0 .25rem;
				}
				small {
					font-size: .2rem;
				}
			}
			.huilife strong {
				color: #ff3f0d
			}
			.sence strong {
				color:#f742a0
			}
			.imgBox {
				width: .8rem;
				height: .8rem;
				position: relative;
				margin: auto;
    			display: block;
				img{ 
					position: absolute;
    				left: 50%;
    				top: 50%;
    				transform: translate(-50%,-50%);
				}
			}
		}
	}
</style>