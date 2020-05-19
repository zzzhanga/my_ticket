<template>
    <div>
<section style="height: 100%">
<!-- <city></city> -->


   <header class="home-header border-bottom">
      <div class="city fl" >
        <span class="vm city-name f14">北京</span>
        <span class="city-arrow-icon vm"></span>
      </div>
      <div class="sel-lists f14 fl pr" @click="movTab">
        <div hot='sel' :class="{selnav:selnav}">正在热映</div>
        <div :class="{selnav:!selnav}">即将上映</div>
        <span class="move pa" :style="{left: moveDistance}"></span>
      </div>
    </header>

  <!-- 正在上映 -->
    <section  v-show="selnav"  class="content">
      
<!-- 引入轮播图组件 -->
      <swiper :imgs="imgs"></swiper>
<!-- 引入 hot组件 -->
      <!-- <hot :hotLists="hotLists"></hot> -->

    </section>

    <!-- 即将上映  -->
    <section  v-show="!selnav"  class="content">

<!-- 引入coming组件 -->
      <!-- <coming :comingLists="comingLists" ></coming> -->
      <div class="click-load-more">
        <span v-show="clickLoadStatus === 'start'">点击查看更多</span>
        <div v-show="clickLoadStatus === 'loading'" class="loading-icon">
          <span>加载中</span>
          <mt-spinner style="display: inline-block" type="fading-circle" color="rgb(100, 100, 100)" :size="19"></mt-spinner>

        </div>
        <span v-show="clickLoadStatus === 'complete'">已经全部显示</span>
      </div>
    </section>
    <!-- <play-video></play-video> -->
  </section>
    </div>
</template>


<script>


// import city from '../components/Home/city'
import swiper from '../components/Home/swiper2'

export default {
    props: {

    },
    data() {
        return {
        moveDistance: '5%',
      imgs: [],
      comingLists: [],
      loaingLists: [],
      selnav: true,
      clickLoadStatus: 'start',
      offset: 0,
      limit: 20,
      total: 0
        };
    },
    computed: {

    },
    created() {
 this.requestData('/movie/swiper', (response) => {
      let data = response.data
      console.log(data);
      
      this.imgs = data.data.data.returnValue
    })
    },
    mounted() {

    },
    watch: {

    },
    methods: {
        movTab(event){
          // 事件代理，给其中一个子元素一个hot属性，值为true 
          // 如果该子元素具有hot属性 则执行前面一个函数 否则执行后面一个函数
        event.target.getAttribute('hot')?this.selectHotTab():this.selectComingTab()
        },
        selectHotTab(){
          this.moveDistance='5%'//控制下方红线的距离始终为5%
          this.selnav=true   //控制红色字体这个类始终具有
        },
         selectComingTab(){
          this.moveDistance='55%'//控制下方红线的距离始终为5%
          this.selnav=false   //控制红色字体这个类始终具有
        },


          requestData (url, fn) {
      // this.pushLoadStack()
      this.$http.get(url).then(fn).then(this.completeLoad)
    },
    },
    components: {
// city,
swiper

    },
};
</script>

<style  >
.home-header {
  height: 40px;
  font-size: 0px;
  background-color: #fff;
}
.selnav {
  color: #ff4d64;
}
.city {
  width: 35%;
  height: 100%;
  line-height: 40px;
  text-align: center;
  display: inline-block;
}
.city-arrow-icon {
  margin-left: 4px;
  width: 12px;
  height: 12px;
  display: inline-block;
}
.city-arrow-icon:after {
  content: "";
  display: block;
  width: 6px;
  height: 6px;
  margin-left: 0;
  border: 1px solid #50505a;
  border-top: 0 none;
  border-left: 0 none;
  margin-left: 2px;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.content {
  margin-bottom: 58px;
}
.sel-lists {
  width: 65%;
  display:-moz-box; 
  display: -webkit-box;
  display: box;
}
.sel-lists div {
  -moz-box-flex: 1.0; 
  -webkit-box-flex: 1.0; 
  line-height: 40px;
  text-align: center;
}
.move {
  display: inline-block;
  bottom: 0px;
  width: 40%;
  border-bottom: 3px solid #ff4d64;
  -webkit-transition: left 0.7s ease-in-out;
  transition: left 0.7s ease-in-out;
}
.click-load-more {
  height: 42px;
  line-height: 42px;
  text-align: center;
  color: #333;
  font-size: 15px;
  background-color: #fff;
  margin: 5px 0 8px;
}
.loading-icon span {
  vertical-align: middle;
}
</style>
