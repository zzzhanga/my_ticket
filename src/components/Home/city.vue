<template>	
	<section ref="city" id="select-city" class="pf fadeInDown" v-if="$store.state.city.show">
		<header class="city-header mint-1px-b pr">
			<span class="fb">选择城市</span>
			<span class="close-city pa" @click="cancelCityList">×</span>
		</header>
		<!-- <div ref="city" @click="selectCity">
			<mt-index-list>
			  <mt-index-section v-for="{city,index} in cityList" :key="index">
				  {{city}}
			    <mt-cell :title="name.regionName" v-for="{name} in city.data" :key="name.id"></mt-cell>
			  </mt-index-section>
			</mt-index-list>
		</div> -->
		<div ref="city" @click="selectCity">
			<mt-index-list>
				<mt-index-section :index="city.sort" v-for="(city,index) in cityList" :key="index">
					<mt-cell :title="item.regionName" v-for="(item) in city.data" :key="item.id"> </mt-cell>
				</mt-index-section>		
			</mt-index-list>
		</div>
     
	</section>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default{
	data () {
		return {
			showCityList: true,
			cityList: []
		}
	},
	methods: {
		...mapActions([
			'updateCityAsync'
		]),
		...mapMutations([
		  	// 'pushLoadStack',
		  	// 'completeLoad'
		]),
		requestData (url, fn) {
		  	// this.pushLoadStack()
		  	this.$http.get(url).then(fn)
		},

		changeCityData (data) {
			// this.pushLoadStack()
			this.$refs.city.className = "pf fadeOutTop"
			this.$store.dispatch('updateCityAsync', data)
			// 改变城市名称 重新触发updataCityAsync方法 data
		},


		// 判断选择的城市，如果是北京上海和广州，则返回对应的缩写 
		// 否则随机返回一个缩写
		matchCityStr (str) {
			let randomList = ['bj', 'sh', 'gz']
			let randomCity = randomList[Math.floor(3*Math.random())]
			switch (str) {
				case '北京': return 'bj'
				case '上海': return 'sh'
				case '广州': return 'gz'
				default: return randomCity
			}
		},

		// 选择城市方法
		selectCity (event) {
			let ele = event.target
			let className = ele.className
			let name = ''
			if (className === "mint-indexsection-index" || className ==="mint-indexlist-nav" || className === "mint-indexlist-navitem") {
				name = ''
			} else if (className === 'mint-cell-wrapper') {
				name = ele.children[0].children[0].innerHTML
			} else if (className === "mint-cell-title") {
				name = ele.children[0].innerHTML
			} else {
				name = ele.innerHTML 
			}
			if (name) {
				// 这里传给changeCityData中的值 city有值
				this.changeCityData({
					city: {
						name: name,
						rN: this.matchCityStr(name)
					}
				}) 
			} else {
				return false
			}
		},
		// 关闭city组件
		cancelCityList () {
			// 这里传到changeCityData()方法中的city为空 
			this.changeCityData({city: {}})
		}
	},
	created () {
		console.log(this.$store.state);
	
		
		this.$store.dispatch('updateCityAsync', {city: {}})   //触发actions中的方法 更新数据
		
		// console.log({city:{}});
		this.requestData('/movie/city', (response) => {
			// let data = JSON.parse(response.data)
			let data = response.data		//获取到所有城市的数据（对象）
			let cityObj = data.data.data.returnValue //获取到每一个城市的数据（对象）
			let citySort = Object.keys(cityObj)//获取到对象中的每一个键  就是导航的索引
			this.cityList.push({
				sort: '热门',
				data: [{
					regionName: '北京',
					id: 1,
					rN: 'bj'
				}, {
					regionName: '上海',
					id: 2,
					rN: 'sh'
				}, {
					regionName: '广州',
					id: 3,
					rN: 'gz'
				}]
			})
			citySort.forEach((item) => {
				this.cityList.push({
					
					sort: item,
					data: cityObj[item],//看不懂，既然item是A到Z的字符串，cityObj是一个对象 ，不是数组 
										//		为啥cityObj[item] 不报错 还能将数据添加到data中
					
					
				})
				// console.log(item)
				// console.log(parseInt(item));
				// console.log(cityObj[typeof()]);

				// 把获取到的数据，全部添加到this.cityList上
				
			})
			console.log("data");
			
			console.log(data);
			console.log("cityObj");
			
			console.log(cityObj);
			console.log(typeof(cityObj));
			
			
			console.log(citySort);
			console.log('cityList');
			
			console.log(this.cityList);
			console.log(this.cityList.data);
			
		})
	
	}
}
</script>

<style>
.mint-indicator-wrapper {
	z-index: 1000
}
#select-city {
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 9999999;
	background-color: #fff;
}
.city-header {
	height: 46px;
	line-height: 46px;
	text-align: center;
	color: #000;
	font-size: 16px;
	background-color: #fff;
}
.close-city {
	font-size: 28px;
	color: #666;
	display: inline-block;
	height: 46px;
	width: 50px;
	line-height: 38px;
	text-align: center;
	right: 0px;
}
@-webkit-keyframes fadeInDown {
  0% {
    opacity: .7;
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px)
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }
}
@keyframes fadeInDown {
  0% {
    opacity: .7;
    -webkit-transform: translateY(-50px);
    -ms-transform: translateY(-50px);
    transform: translateY(-50px)
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0)
  }
}
.fadeInDown {
  -webkit-animation: fadeInDown .3s;
  animation: fadeInDown .3s;
}
@-webkit-keyframes fadeOutTop {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }
  100% {
		opacity: 0;
		-webkit-transform: translateY(-50px);
		transform: translateY(-50px)
  }
}
@keyframes fadeOutTop {
  0% {
    opacity: 1;
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0)
  }
  100% {
	  opacity: 0;
	  -webkit-transform: translateY(-50px);
	  -ms-transform: translateY(-50px);
	  transform: translateY(-50px)
  }
}
.fadeOutTop {
  -webkit-animation: fadeOutTop .35s;
  animation: fadeOutTop .35s;
}
</style>
