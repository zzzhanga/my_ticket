<template>
  <div id="app">
   
    <router-view/>
    <Footer :showNav='showNav'></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
export default {
  name: 'App',

  data(){
return{
  direction:'forward',
  showNav:true
}
  },

 components:{
Footer
 },
 
 watch:{
'$route':function(){
  this.routeChange()
}},



 methods: {
   routeChange(){
    //  当在home cinema 和me三个页面时显示导航栏 否则显示返回键
     let paths=this.$route.path
    //  console.log(paths);
     if(paths==='/home'||paths==='/cinema'||paths==='/me'){
       this.showNav=true
     }else{
this.showNav=false
     }
   }
 }
 ,
 created () {
    this.routeChange()
  },
  mounted () {
    window.setTimeout(() => {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }, 250)
  }
}
</script>

<style>

 body{
   background: #f5f5f5;
 }

</style>
