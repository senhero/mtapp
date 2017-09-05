<template>
	<div class="header_banner_wrap slide"  ref='swipeSlide'>
    	<div class="bd">
	    	<ul>
		        <li>
		            <a href="javavscript:;">
		                <img src="/src/images/banner1.jpg" alt="">
		            </a>
		        </li>
		        <li>
		            <a href="javavscript:;">
		                <img src="/src/images/banner1.jpg" alt="">
		            </a>
		        </li> 
		    </ul>
	    </div>
	    <div class="dot">
	        <span></span>
	        <span></span>
	    </div>
	</div>
</template>
<script>

 	import TouchSlide from "@/assets/js/touchslide";
   	import 'swiper/dist/css/swiper.min';
	export default {
		name: 'banner',
		mounted(){
			// console.log(this.$el);
			var vm = this;




			var swiperSlide = vm.$refs.swiperSlide;

			//console.log(new swipeSlide(vm.$refs.swiperSlide))
			//this.banner();
			
			TouchSlide({
				slideCell: '.nav',
				mainCell:'.nav_list ul'
			});	
			this._geolocation();
		},
		methods:{
			_geolocation(){ //地理位置获取
				navigator.geolocation.getCurrentPosition(function(pos){
					
					
				},function(){
					
				},{
					enableHighAccuracy: true,
					 timeout: 5000,
					 maximumAge: 3000
				})
			}
		}
	}
</script>
<style lang="scss">
	.header_banner_wrap {
		width: 100%;
		height: 100%;
	    position: relative;
	    max-width: 640px;
	    overflow: hidden;
	}
	li img {
		width: 100%;
	}
	/*.slide:after{
	    content: '';
	    display: block;
	    width: 100%;
	    padding-top: 50%;
	}
	.slide ul{
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
	}
	.slide li{
	    list-style: none;
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
	}
	.slide li:first-child{
	    z-index: 1;
	}
	.slide li img{
	    position: absolute;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 100%;
	    border: none;
	}
	.slide .dot{
	    position: absolute;
	    right: 10px;
	    bottom: 10px;
	    font-size: 0;
	}
	.slide .dot span{
	    display: inline-block;
	    width: 5px;
	    height: 5px;
	    margin-left: 5px;
	    border: 1px solid #fff;
	    border-radius: 50%;
	}
	.slide .dot .cur{
	    background-color: #fff;
	}*/
</style>