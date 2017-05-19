<template>
  <div :style="space">

  </div>
</template>

<script>
export default {
  name: 'space',
  props: {
  	height: {
  		type: String,
  		default: '20px'
  	},
  	width: {
  		type: String,
  		default: '100%'
  	},
  	Bgcolor: {
  		type: String,
  		default: '#ffffff'
  	}
  },
  data () {
    return {
      space:{
      	height: this.height,
      	width: this.width,
      	backgroundColor: this.Bgcolor
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
