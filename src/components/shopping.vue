<template>
  <div class="shopping">
    <p>
      {{$route.params}}
    </p>
    <div class="flex fixd">
      <div class="flex-1 flexC textcenter fs12">
        <i class="fa fa-home fs20" aria-hidden="true"></i>
        <span @click="home" class="fs12">首页</span>
      </div>
      <div class="flex-1 flexC textcenter fs12">
        <i class="fa fa-shopping-cart fs20" aria-hidden="true"></i>
        <span class="fs12">购物车</span>
      </div>
      <div class="flex-2 bg1 textcenter fs lh">加入购物车</div>
      <div class="flex-2 bg textcenter fs lh">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopping',
  props: {
  },
  data () {
    return {
      }
  },
  methods: {
    home(){
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.shopping{
  .flex{
    display: flex;
    align-items: center;
    height: 3.5rem;
    justify-content: space-between;
    width: 100%;
  }
  .fixd{
    position: fixed;
    bottom: 0;
  }
  .flex-1{
    flex: 1;
    height: 100%;
    cursor: pointer;
  }
  .flex-2{
    flex: 1.5;
    height: 100%;
    cursor: pointer;
  }
  .bg{
    background-color: #f95b07;
    color: #fff;
  }
  .bg1{
    background-color: #f90;
    color: #fff;
  }
  .textcenter{
    text-align: center;
  }
  .fs{
    font-size: 1.4em;
  }
  .lh{
    line-height: 3.5rem;
  }
  .flexC{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .fs12{
    color: rgba(0,0,0,.72);
    font-size: 1.2rem;
  }
  .fs20{
    font-size: 2.3rem;
    color: rgba(0,0,0,.42);
  }
}
</style>
