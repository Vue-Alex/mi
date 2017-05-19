<template>
  <div class="flex-card positionR" @click.stop="go">
    <img :src="product.src" class="lazyImg" />
    <div class="product-info">
      <p class="name">{{product.name}}</p>
      <p class="info">{{product.info}}</p>
      <p><span class="colorRed">￥ {{product.price}} </span><span v-if="product.oldprice" class="underline"> ￥{{product.oldprice}}</span></p>
    </div>

    <img v-if="product.discount" src="//i8.mifile.cn/v1/a1/3246d895-9d50-e0c3-298f-7d42f7f5bc47.webp" class="top lazyImg" alt="">
  </div>
</template>

<script>
import { XImg } from 'vux'
export default {
  name: 'card',
  components: {
    XImg
  },
  props: {
    product: {
      type: Object,
      default: ()=>{
        return {
          src:'http://i8.mifile.cn/v1/a1/ba9e445e-fe50-d697-1245-a5cde1d15126.webp?width=360&height=360',
          name: '小米5 64GB版',
          info: '十余项黑科技，很轻狠快',
          price: 999,
          oldprice:'555',
          linkName: 'shopping',
          discount: true
        }
      }
    }
  },
  data () {
    return {
      
    }
  },
  methods:{
    go(){
      let name = this.product.linkName;
      this.$router.push({ name, params: this.product})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.flex-card{
  position: relative;
  display: inline-flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: column;
  cursor: pointer;
  .lazyImg{
    max-width: 100%;
  }
  .underline{
    font-size: 1rem;
    color: rgba(0,0,0,.54);
    text-decoration: line-through;
  }
  .product-info{
    padding: 1rem 2rem;
    font-size: 1.4rem;
  }
  .colorRed{
    color: #ff6000;
  }
  .positionR{
    position: relative;
  }
  .top{
    position: absolute;
    max-width: 6rem;
    top: 0;
    left: 0;
  }
  .name{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 10em;
    color: rgba(0,0,0,.87);;
  }
  .info{
    color: rgba(0,0,0,.54);
    font-size: 1rem;
    word-wrap: break-word;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 10em;
  }
}
</style>
