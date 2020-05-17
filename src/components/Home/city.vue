<template>
    <div>
	<!-- <section ref="city" id="select-city" class="pf fadeInDown" v-if="$store.state.city.show"> -->
		<header class="city-header mint-1px-b pr">
			<span class="fb">选择城市</span>
			<span class="close-city pa" >×</span>
		</header>
		<!-- <div ref="city" @click="selectCity">
			<mt-index-list>
			  <mt-index-section :index="city.sort" v-for="city in cityList">
			    <mt-cell :title="name.regionName" v-for="name in city.data" key="name.id"></mt-cell>
			  </mt-index-section>
			</mt-index-list>
		</div> -->
	</section>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            showCityList:true,
            cityList:[]
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

    },
    components: {

    },
};
</script>

<style scoped lang="stylus">

</style>
