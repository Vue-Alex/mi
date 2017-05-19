<template>
  <img :src="img.src" :class="classActive" class="img-link" alt="" @click.stop="go">
</template>

<script>
export default {
  name: 'imglink',
  props: {
  	img: {
  		type: Object,
  		default : ()=>{
  			return {
  				src: 'http://i8.mifile.cn/v1/a1/1d338200-1be1-f868-9695-9d5ae0d6c2c6.webp?width=720&heihgt=440',
  				link: '/hahah ',
  				maxheight: true,
  				maxwidth: true
  			}
  		}
  	}
  },
  data () {
    return {
      classActive: {
      	mw100: this.img.maxwidth,
      	mh100: this.img.maxheight
      }
    }
  },
  methods: {
  	go(){
  		this.$router.push(this.img.link)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.img-link{
	display: inline-block;
	cursor: pointer;
}
.mw100{
	max-width: 100%;
}
.mh100{
	max-height: 100%;
}
</style>
