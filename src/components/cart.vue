<template>
  <div class="cart">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'cart',
  props: {
  },
  data () {
    return {
      msg:'购物车是空的'
      }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
