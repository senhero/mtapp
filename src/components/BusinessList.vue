<template>
	
	<div class="businessList">
		<div class="bs_tit"><span>猜你喜欢</span></div>
		
		<div class="bs_wraper">
			<!-- <scroller> -->
			<div class="bs_item_wrapper" v-for="food in foods">
				<router-link :to="{name:'deatail', params:{id:food.id}}" class="bs_item" tag="div">
					<div class="list-img">
						<img :src="food.imgUrl" alt="">
					</div>
					<div class="list-block-right">
						<div class="block_right_top">
							<div class="brand single-title">{{food.name}}</div>
							<div class="price_wrapper">
								<span class="stars">

									<i v-for="star in food.grade" class="icon fa fa-star"></i>
								</span>
								<span class="price">{{food.price}}</span>
								<div class="location">							
			                    	<span class="area">{{food.location}}</span>
								</div>
							</div>
							<div class="cate_wrapper">
								<span class="catename">{{food.type}}</span>
								<span class="smart-tag index-0">徐家汇烧烤第3名</span>
							</div>
							<div class="service_tag">
								<span v-for="s,index in food.service"> {{s}} <b v-if='index!==(food.service.length-1)'>|</b></span>
							</div>
						</div>
						<div class="deal-info-wrapper">
							<div v-if="food.preferential" v-for="p in food.preferential " class="preferential maiding">
								<span class="icon-youhui" :class="[p.icon]"></span><span class="content">{{p.desp}}</span>
							</div>
						</div>
					</div>
				</router-link>	
			</div>
			<!-- </scroller> -->
			
			<!-- <div class="bs_item">
				<div class="list-img">
					<img src="/src/images/bs01.jpg" alt="">
				</div>
				<div class="list-block-right">
					<div class="block_right_top">
						<div class="brand single-title">豆捞坊（长寿店）</div>
						<div class="price_wrapper">
							<span class="stars">
								<i class="icon fa fa-star"></i>
								<i class="icon fa fa-star"></i>
								<i class="icon fa fa-star"></i>
								<i class="icon fa fa-star"></i>
								<i class="icon fa fa-star"></i>
							</span>
							<span class="price">￥94/人</span>
							<div class="location">							
		                    	<span class="area">长寿路</span>
							</div>
						</div>
						<div class="cate_wrapper">
							<span class="catename">火锅</span>
							<span class="smart-tag index-0">徐家汇烧烤第3名</span>
						</div>
						<div class="service_tag"><span>支持预定</span> | <span>买单</span></div>
					</div>
					<div class="deal-info-wrapper">
						<div class="preferential maiding">
							<span class="icon-youhui ic1"></span><span class="content">78代100元，88代100元</span>
						</div>
					</div>
				</div>
			</div> -->
		
		</div>
	</div>
	
</template>
<script>
	// import Vue from "vue"
	// import VueScroller from 'vue-scroller'
	// Vue.use(VueScroller)
	export default {
		name:'businessList',
		data(){
			return {
				foods:[
				    {
				        "id": 1, 
				        "name": "豆捞坊（长寿店）", 
				        "imgUrl": "/src/images/bs01.jpg", 
				        "grade": 4, 
				        "type": "火锅", 
				        "price": "￥94/人", 
				        "location": "长寿路", 
				        "ranking": "长寿路火锅第14名", 
				        "service": [
				            "支持预订", 
				            "支持外卖", 
				            "买单"
				        ], 
				        "preferential": [
				            {
				                "name": "卷", 
				                "icon": "ic1", 
				                "desp": "89代100元"
				            }, 
				            {
				                "name": "买", 
				                "icon": "ic2", 
				                "desp": "买单立享9折"
				            }
				        ]
				    }, 
				    {
				        "id": 2, 
				        "name": "吉野家（长寿店）", 
				        "imgUrl": "/src/images/bs01.jpg", 
				        "grade": 3, 
				        "type": "火锅", 
				        "price": "￥94/人", 
				        "location": "长寿路", 
				        "ranking": "长寿路火锅第14名", 
				        "service": [
				            "支持预订", 
				            "支持外卖", 
				            "买单"
				        ], 
				        "preferential": [
				            {
				                "name": "卷", 
				                "icon": "ic1", 
				                "desp": "89代100元"
				            }
				        ]
				    }, 
				    {
				        "id": 3, 
				        "name": "比亚森（长寿店）", 
				        "imgUrl": "/src/images/bs01.jpg", 
				        "grade": 2, 
				        "type": "火锅", 
				        "price": "￥94/人", 
				        "location": "长寿路", 
				        "ranking": "长寿路火锅第14名", 
				        "service": [
				            "支持预订", 
				            "支持外卖", 
				            "买单"
				        ], 
				        "preferential": [
				            {
				                "name": "买", 
				                "icon": "ic2", 
				                "desp": "买单立享9折"
				            }
				        ]
				    }, 
				    {
				        "id": 4, 
				        "name": "大鱼铁板烧（长寿店）", 
				        "imgUrl": "/src/images/bs01.jpg", 
				        "grade": 1, 
				        "type": "火锅", 
				        "price": "￥94/人", 
				        "location": "长寿路", 
				        "ranking": "长寿路火锅第14名", 
				        "service": [
				            "支持预订", 
				            "支持外卖", 
				            "买单"
				        ], 
				        "preferential": [
				            {
				                "name": "卷", 
				                "icon": "ic1", 
				                "desp": "89代100元"
				            }, 
				            {
				                "name": "买", 
				                "icon": "ic2", 
				                "desp": "买单立享9折"
				            }, 
				            {
				                "name": "团", 
				                "icon": "ic3", 
				                "desp": "团购价格78"
				            }
				        ]
				    }
				]
			}
		},
		methods: {

		}
	}
</script>
<style lang="scss">
	.businessList {
		margin-top: .12rem;
		background-color: #fff;
		.bs_tit {
			position: relative;
			line-height: .48rem;
			font-size: .24rem;
			color: #9b9b9b;
			border-bottom: 1px solid #f2f2f2;
			text-align: center;
			span{
				position: relative;
				&:after, &:before{
					content:'';
					display:block;
					width: 14px;
					height: 1px;
					position: absolute;
					top: 50%;
					background: #d4d4d4;
				}
				&:before{
					left: -20px;
				}
				&:after{
					right: -20px;
				}
			}
		}
		.bs_wraper {
			width: 100%;
			height: auto;
			position: relative;
		}
		.bs_item_wrapper{
			&:last-of-type{
				border: none;
			}
		}
		.bs_item {
			position: relative;
			padding: .15rem;
			display: flex;
			border-bottom: 1px solid #f2f2f2;

			.list-img {
				position: relative;
				width: 1.6rem;
				height: 1.6rem;
				img{
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				}
			}
		}
		.list-block-right {
			flex: 1;
			margin-left: .1rem;
		}
		.block_right_top {
			padding-bottom: .1rem;
			border-bottom: 1px solid #f2f2f2;
		}
		.single-title {
			font-size: .28rem;
			padding-top: .1rem;
			margin-bottom: .12rem;
			color: #333;
		}
		.price_wrapper {
			position: relative;
		    font-size: .24rem;
		    line-height: .33rem;
		    margin-top: .06rem;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
			.stars,.price{
				display: inline-block;
			}
			.fa-star {
				margin-right: .05rem;
				color: #FF9712;
			}
			.location {
				position: absolute;
				top: 0;
				right: 0; 
			}
		}
		.cate_wrapper {
			margin: .1rem 0 0;
			line-height: .24rem;
			font-size: .24rem;
			.smart-tag {
				color: rgb(190, 158, 77);
				background: rgb(251, 244, 228) 
			}
		}
		.service_tag {
			font-size: .22rem;
			margin: .1rem 0 0;
			line-height: .24rem;
			color:rgb(108, 186, 178);
			span {
				display: inline-block;
				vertical-align: middle;
				margin-right: .1rem;
				line-height: .24rem;
			}
			b {
				display: inline-block;
				vertical-align: top;
				line-height: .24rem;
			}
			
		}
		.deal-info-wrapper {
			margin-top: .12rem;
			font-size: .24rem;
			line-height: .3rem;
			font-size: .22rem;
			color: #666;
			.preferential {
				line-height: .36rem;
			}
			.icon-youhui {
				display: inline-block;
				width: .3rem;
				height: .3rem;
				vertical-align: top;
				margin-right: 3px;
				background-size: .3rem .3rem;

				&.ic1{
					background-image: url(/src/images/ic1.png);
				}
				&.ic2{
					background-image: url(/src/images/ic2.png);
				}
				&.ic3{
					background-image: url(/src/images/ic3.png);
				}
			}
			.content {
				display: inline-block;
				line-height: .32rem;
				vertical-align: top;
				font-size: .24rem;
			}
		}
		
	}
</style>