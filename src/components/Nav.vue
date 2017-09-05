<template>
	<div class="nav" ref="navs">
		<div class="nav_list nav">
			<ul class="nav_wrapper">
				<li class="swiper-slide">
					<div class="item" v-for="item in navList[0]">
						<router-link :to="item.url">
							<span class="img" :style="{'background':item.color}">
								<i class="u-icon fa" :class="[item.icon,item.icon.indexOf('fa') ?'iconfont':'fa']"></i>
							</span>
							<span class="tit">
								<span v-text="item.title"></span>
							</span>
						</router-link>
					</div>
				</li>
				<li class="swiper-slide">
					<div class="item" v-for="item in navList[1]">
							<router-link :to="item.url">
								<span class="img" :style="{'background':item.color}">
									<i class="u-icon fa" :class="[item.icon,item.icon.indexOf('fa') ?'iconfont':'fa']"></i>
								</span>
								<span class="tit">
									<span v-text="item.title"></span>
								</span>
							
						</router-link>
					</div>
				</li>
			</ul>
		</div>
		<div class="nav_dot">
	        <span></span>
	        <span></span>
	    </div>
	</div>
</template>
<script>
	import TouchSlide from  '@/assets/js/touchslide'
	export default {
		name: 'nav',
		data(){
			return {
				"navList":[
					[{title:'美食',icon:'meishi', color:'#fd9d21', url:''},
					{title:'猫眼电影',icon:'dianying',color:'#ff6767', url:''},
					{title:'酒店',icon:'jiudian',color:'#8a90fa', url:''},
					{title:'休闲娱乐',icon:'xiuxianyule',color:'#fed030', url:''},
					{title:'外卖',icon:'waimai',color:'#fd9d21', url:''},
					{title:'KTV',icon:'ktv', color:'#fed030', url:''},
					{title:'周边游',icon:'zhoubianyou',color:'#4dc6ee', url:''},
					{title:'丽人',icon:'liren',color:'#ff80c2', url:''},
					{title:'小吃快餐',icon:'xiaochikuaican',color:'#fd9d21', url:''},
					{title:'机票/火车票',icon:'fa-train',color:'#599eec', url:''}
					],
					[{title:'足疗按摩',icon:'zuliao', color:'#fed030', url:''},
					{title:'今日新单',icon:'jinrixindan',color:'#00d3be', url:''},
					{title:'生活服务',icon:'jiudian',color:'#A8DD99', url:''},
					{title:'甜点饮品',icon:'yinliaoxiaochi',color:'#fd9d21', url:''},
					{title:'母婴亲子',icon:'fa-child',color:'#ff80c2', url:''},
					{title:'学习培训',icon:'fa-book', color:'#84d23d', url:''},
					{title:'结婚',icon:'fa-mars-double',color:'#4dc6ee', url:''},
					{title:'家装',icon:'fa-gavel',color:'#ff80c2', url:''},
					{title:'代金券',icon:'tuangou', color:'#fd9d21', url:''},
					{title:'全部',icon:'quanbu',color:'#00d3be', url:''}
					]
				]
			}
		},
		mounted(){
			var vm = this;
			// this.swiperSilde(vm.$refs.navs);
			// 
			vm.$nextTick(function(){
				TouchSlide({
					slideCell: '.header_banner_wrap',
					mainCell:'.bd ul'
				})
			})

		},
		methods: {
			// swiperSilde(ele){
			// 	$(ele).swipeSlide({
			// 		autoSwipe: false,
			// 		callback : function(i){
			//             $('.nav_dot').children().eq(i).addClass('cur').siblings().removeClass('cur');
			//         }
			// 	});
			// }
		}

	}
</script>
<style lang="scss">
	.nav{
		height: 3.2rem;
		background: #fff;
		margin-bottom: .12rem;
		position: relative;
		overflow: hidden;
		border-bottom: 1px solid #ddd;
		&_wrapper{
			position: absolute;
		    left: 0;
		    top: 0;
		    width: 100%;
		    height: 100%;
			.swiper-slide {
				padding: .2rem 0rem .05rem;
				overflow: hidden;
			}
			.item {
				width: 20%;
				float: left;
				margin-bottom: .24rem;
				text-align: center;
				span {
					display: block;
				}
				.img{
					$w: .8rem;
					display:inline-block;
					width: $w;
					height: $w;
					border-radius: 50%;
					.u-icon {
						font-size: .5rem;
						text-align: center;
						line-height: $w;
					}
					.iconfont.dianying {
						font-size: .48rem;
					}
					.fa-train {
						font-size: .4rem;
					}
				}
				.tit{
					color: #1b1b1b;
					font-size: .2rem;
					line-height: .42rem;
					span {
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}
			}
		}
		.nav_dot{
			width:100%;
			text-align: center;
		    position: absolute;
		    left: 0;
		    left: 0;
		    bottom: .1rem;
		    font-size: 0;
		}
		.nav_dot span{
		    display: inline-block;
		    width: .12rem;
		    height: .12rem;
		    margin:0 .05rem;
		    border-radius: 50%;
		    background-color: #F0EFED;
		}
		.nav_dot .cur{
		    background-color: #06c1ae;
		}
	}
</style>