<template>
    <section id='coming'>
    <section v-for="(comingItem,index) in comingLists" :key="index">
      <p class="open-date">{{ comingItem.openTime }} {{ comingItem.day }}</p>
      <ul class="coming">
        <li :class="{'border-bottom': comingItem.movies[comingItem.movies.length-1] != item}" v-for="(item, index) in comingItem.movies" :key="item.id">
          <figure class="m-img ml fl pr" @click="playMovieVideo(item.preview[0] ? item.preview[0].iphoneUrl : 'http://cloud.video.taobao.com/play/u/1745440806/p/1/e/6/t/1/d/hd/45862110.mp4'
  , `https://gw.alicdn.com/${item.poster}`)">
            <img v-lazy="`https://gw.alicdn.com/${item.poster}`">
            <div class="play-icon pa">
                <img src="https://gw.alicdn.com/tps/TB1PH2uLXXXXXaLaXXXXXXXXXXX-60-60.png" alt="">
            </div>
          </figure>
          <div class="mr">
            <div class="m-buy fr">
                <button class="forward-buy-btn f12">预售</button>
            </div>
            <div class="m-info">
              <router-link :to="{ name: 'detail', params: { id: item.mID }}">
                <div class="m-name">
                  <h2 class="f16 tddd vm fl">{{ item.showName }}</h2>
                  <div class="vm type-3dimax" v-if="item.showMark == 'IMAX3D'"></div>
                  <div class="vm type-imax" v-if="item.showMark == 'IMAX'"></div>
                  <div class="vm type-3d" v-if="item.showMark == '3D'"></div>
                </div>
                <p class="count">{{ item.wantCount }}人想看</p>
                <p>导演：{{ item.director }}</p>
                <p>主演：{{ item.leadingRole }}</p>
              </router-link>
            </div>
          </div>
        </li>       
      </ul>      
    </section>
  </section>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    props: {
        'comingLists':{
            type:Array,
            default:()=>[]
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

    },
    methods: {
        ...mapMutations([
            'playVideo'
            ]),
            playMovieVideo (url, cover) {
            this.playVideo({audio: {
                url: url,
                cover: cover
            }})
            }
    },
    components: {

    },
};
</script>

<style scoped >

</style>
