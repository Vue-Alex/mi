<template>
  <div class="home">
    <search v-model="search" :results="results"></search>
    <swiper :list="list" :show-desc-mask="false" auto loop :aspect-ratio="0.71"></swiper>
    <swiper-text  :text="text" :link="link">
      <img src="http://m.mi.com/component/list/img/sczb_ed0a4af.png" class="h100" slot="icon" alt="">
    </swiper-text>
    <space height=".5rem" Bgcolor="#ccc"></space>
    <div class="flexbox">
      <div class="w49">
        <img-link :img="img1"></img-link>
      </div>
      <div class="flex w49">
        <div class="h48"><img-link :img="img2"></img-link></div>
        <div class="h48"><img-link :img="img3"></img-link></div>
      </div>
    </div>
    <img-link :img="img4"></img-link>
    <img-link></img-link>
    <div class="flexbox">
      <card class="w49"></card>
      <card class="w49"></card>
    </div>
    
  </div>
</template>

<script>
import { Search ,Swiper ,SwiperItem ,CellBox ,XImg ,Grid, GridItem} from 'vux'
import SwiperText from './../basic/swipertext.vue'
import ImgLink from './../basic/imglink.vue'
import Space from './../basic/space.vue'
import Card from './../basic/card.vue'

export default {
  components: {
    Search,
    Swiper,
    SwiperItem,
    CellBox,
    XImg,
    Grid,
    GridItem,
    SwiperText,
    ImgLink,
    Space,
    Card
  },
  name: 'hello',
  data () {
    return {
      search: '',
      results: [],
      list: [{
        url:'/shopping',
        img:'http://i8.mifile.cn/v1/a1/bb613329-e24f-ecce-0cf0-8b3840c9c8bc.webp?bg=D1B3B3'
      },
      {
        url:'/shopping',
        img:'http://i8.mifile.cn/v1/a1/c2829116-5978-d88b-0f9a-3cc5fc3e7a31.webp?bg=D2C5B5'
      },{
        url:'https://h5.mi.com/p/ghd/2017/zl0512/index.html?needValidHost=false&v=0318',
        img:'http://i8.mifile.cn/b2c-mimall-media/25fcb9684c6f55c7d04770f1af027d17.jpg'
      }],
      text: '给家多一份安全保障 米家烟雾报警器评测',
      link: '/给家多一份安全保障 米家烟雾报警器评测',
      textnode: [{
        text: '给家多一份安全保障 米家烟雾报警器评测',
        href: '/给家多一份安全保障 米家烟雾报警器评测'
      },{
        text: '2017小米年收入将超千亿 雷军道出成功秘诀',
        href: '/2017小米年收入将超千亿 雷军道出成功秘诀'
      },{
        text: '闭眼买都划算 小米520特惠攻略',
        href: '/闭眼买都划算 小米520特惠攻略'
      }
      ],
      time: 2000,
      img1: {
        src:'http://i8.mifile.cn/b2c-mimall-media/109d75acbb4efdedc5b011d35a17211a.jpg?width=358&heihgt=508',
        link: '/shopping',
        maxheight: true,
        maxwidth: true
      },
      img2: {
        src: 'http://i8.mifile.cn/v1/a1/4d4d4abc-2bca-9bf8-82c7-67847ac4c038.webp?width=358&heihgt=252',
        link: '/shopping',
        maxheight: true,
        maxwidth: true
      },
      img3: {
        src: 'http://i8.mifile.cn/b2c-mimall-media/c9f26a6a794da1ba1cc8f54f6c24e693.jpg?width=358&heihgt=252',
        link: '/shopping',
        maxheight: true,
        maxwidth: true
      },
      img4: {
        src: 'http://i8.mifile.cn/b2c-mimall-media/55ba40f6a18c3bdea469cfad0e198092.jpg?width=720&heihgt=280',
        link: '/shopping',
        maxheight: true,
        maxwidth: true
      }
    }
  },
  mounted(){
    let i =0;
    setInterval(()=>{
      if(i<this.textnode.length){
        this.text = this.textnode[i].text
        this.link = this.textnode[i++].href
      }else {
        this.text = this.textnode[i=0].text
        this.link = this.textnode[i=0].href
      }
    },this.time)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.h100{
  max-height: 100%;
  max-width: 100%;
  vertical-align: middle;
}
.flexbox{
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.flex{
  display: flex;
  flex-direction: column;
  
}
.mr10{
  margin-right: .4rem;
}
.w49{
  width: 49.5%;
}
</style>
