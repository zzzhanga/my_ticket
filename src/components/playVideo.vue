<template>
   <section class="mask video-mask" @click="cancelMask" v-show="showMask">
  	<div class="video-box pa">
  		<div class="v-cover">
  			<video :src="$store.state.video.url" ref="video" class="v-content" :poster="$store.state.video.cover"></video>
  		</div>
  		<div class="v-icon pa" @click="videoStar" v-if="showIcon">
  		</div>
         
  	</div>
  </section>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex';
export default {
    props: {

    },
    data() {
        return {
showIcon:true
        };
    },
    computed: {
...mapGetters([
    'showMask'
    // 即是 mutation中state.playStatus的值 
    // 控制video组件是否显示
])
    },
    created() {

    },
    mounted() {
        let video = this.$refs.video
            video.onended = () => {
            this.showIcon = true
            }
    },
    watch: {

    },
    methods: {
        ...mapMutations([
        'pauseVideo'
        ]),
        cancelMask(ecvent){
            // alert(2)
            // 事件代理 如果点击的是遮罩层 则视频暂停 调用pushVideo（）不传参数 让showMask为false 关闭是视频播放组件
            if(event.target.className==="mask video-mask"){
                this.videoStop()
                this.pauseVideo()
                // alert(1)
            }
        },
        videoStar(){
            this.showIcon=false
            let video=this.$refs.video
            console.log(video);
            video.play() 
            // icon消失 视频播放
        },
        videoStop(){
            this.showIcon=true
            let video = this.$refs.video
            video.pause()
        }
    },
    components: {

    },
};
</script>

<style scoped >
.video-box {
	width: 100%;
	height: 200px;
	top: 20%;
	padding: 0 20px;
	box-sizing: border-box;
}
.v-cover {
	height: 100%;
	background-color: #000;
	background-repeat: no-repeat;
	background-size: auto 100%;
	background-position: center;
}
.v-icon {
	width: 90px;
	height: 90px;
	left: 50%;
	top: 50%;
	margin-left: -45px;
	margin-top: -45px;
	background: url('../assets/images/sprite.png') -2px -2px no-repeat;
}
.v-content {
	width: 100%;
	height: 100%;
}
</style>
