<template>
	<div class="swiper" @click.stop="go">
		<div class="flex1">
			<slot name="icon">Logo</slot>
		</div>
		<div class="text flex3 vux-1px-l">
			<p class="textnode fs12">
				<slot name="text">{{text}}</slot>
			</p>
		</div>
	</div>
</template>

<script>
import { Cell, Group} from 'vux'
export default {
  name: 'swipertext',
  components: {

  },
  props: {
  	text: {
  		type: String
  	},
  	link: {
  		type: String,
  		required: true
  	}
  },
  data () {
    return {
      
    }
  },
  methods: {
  	go(){
  		this.$router.push(this.link)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.swiper{
	background: #ffffff;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	height: 3rem;
	max-height: 3rem;
	width: 100%;
	max-width: 100%;
	font-size: 1rem;
	cursor: pointer;
	&:active{
		background: #ccc;
	}
	.text{
		overflow: hidden;
		text-indent: 1em;
	}
	.textnode{
		overflow: hidden;
		width: 100%;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.fs12{
		
	}
	.flex1{
		flex: 1;
	}
	.flex3{
		flex: 3;
	}
}
</style>
