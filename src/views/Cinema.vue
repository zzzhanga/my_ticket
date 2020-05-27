<template>
	<section id="cinema">
     
		<city></city>
		 <cinemaArea></cinemaArea>
		<cinema></cinema>
	</section>
</template>

<script>
import { mapMutations } from 'vuex'
// import { cinema, cinemaArea, city } from '../components/'
import city from '../components/Home/city'
import cinema from '../components/cinema/cinema'
import cinemaArea from '../components/cinema/movieArea'


export default{
	data () {
		return {
		}
	},
	components: {
		cinema,
		cinemaArea,
		city
	},
	methods: {
		...mapMutations([
		  'pushLoadStack',
		  'completeLoad',
		  'showCityList'
		]),
		requestData (url, fn) {
		  this.pushLoadStack()
		  this.$http.get(url).then(fn)
		}
    },
    mounted() {
        
    },
}
</script>

<style>
</style>

