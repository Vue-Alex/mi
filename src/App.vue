<template>
  <div id="app">
  	<transition name="translateX">
    	<router-view class="view"></router-view>
    </transition>

	<tabbar>
		<tabbar-item selected link="/">
			<i class="fa fa-home" aria-hidden="true" slot="icon"></i>
			<span slot="label">首页</span>
		</tabbar-item>
		<tabbar-item link="/classify">
			<i class="fa fa-paper-plane-o" aria-hidden="true" slot="icon"></i>
			<span slot="label">分类</span>
		</tabbar-item>
		<tabbar-item link="/cart">
			<i class="fa fa-shopping-cart" aria-hidden="true"  slot="icon"></i>
			<span slot="label">购物车</span>
		</tabbar-item>
		<tabbar-item link="/me">
			<i class="fa fa-user-circle-o" aria-hidden="true" slot="icon"></i>
			<span slot="label">我的</span>
		</tabbar-item>
	</tabbar>

    <transition name="scale">
    	<router-view name="shopping" class="shopping"></router-view>
    </transition>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
  	Tabbar,
  	TabbarItem
  },
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';

body {
  background-color: #fbf9fe;
  
}
html{
	font-size: 62.5%;
}
.view{
	position: absolute;
	top: 0;
	bottom: 50px;
	left: 0;
	right: 0;
	overflow-x: hidden;
	max-width: 1024px;
	margin: 0 auto;
}
.shopping{
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 502;
	background-color: #fff;
	overflow-x: hidden;
	
	height: 100vh;
}
.translateX-enter-active, .translateX-leave-active {
  transition: all .5s;
}
.translateX-enter, .translateX-leave-active {
  transform: translateX(-100%);
  opacity: 0;
}
.scale-enter-active, .scale-leave-active {
  transition: all .5s;
}
.scale-enter, .scale-leave-active {
  transform: scale3d(.5, .5, .5);
  background: #999;
}
</style>
