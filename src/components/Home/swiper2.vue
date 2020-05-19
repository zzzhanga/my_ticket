


<template>
    <div>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in imgs" :key="index">
            				<img class="img" :src="'https://gw.alicdn.com/tfs/' + item.smallPicUrl" />
        </div>
        
    </div>
    <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
</div>
    </div>
</template>

<script>
import Swiper from 'swiper/js/swiper.min.js'
export default {
    name: 'swiper',
    props: {
        imgs:{
            type:Array,
            defult:()=>[]
}
    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {
imgs(){
    this.$nextTick(()=>{
        var mySwiper = new Swiper('.swiper-container',{
        pagination: {
             el: '.swiper-pagination',
              loop: true,
			    pagination: '.swiper-pagination',
			    paginationClickable: true,
			    autoplay : 2000,
				autoplayDisableOnInteraction : false,	
  },
})
    })

    
}
    },
    methods: {

    },
    components: {

    },
};
</script>

<style type="text/css">
 
   .swiper-pagination-bullet {
		background: #e5e8e8;
		opacity: 1; 
	}
 .swiper-pagination-bullet-active {
		background: #ff5733;
	}
</style>
