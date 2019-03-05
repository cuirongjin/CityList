<template>
  <div class="list" ref="wrapper">
    <div>
    <div class="area">
      <div class="title">
        当前城市
      </div>
      <div class="button-list">
        <div class="button-wrapper">
            <div class="button">
              北京
            </div>
        </div>
      </div>
    </div>
    <div class="area">
       <div class="title">
        热门城市
      </div>
      <div class="button-list">
        <div class="button-wrapper" v-for="item in hotCities" :key="item.id">
            <div class="button"> 
              {{item.name}}
            </div>
        </div>
      </div>
    </div>  
    <div class="area" 
      v-for="(item,key) of cities"
      :key="key"
      :ref="key"
    >
      <div class="title">{{key}}</div>
      <div class="item-list">
        <div class="item" 
          v-for="list in item "
          :key="list.id"
        >
           {{list.name}}
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'HelloWorld',
  props:{
    hotCities:Array,
    cities:Object,
    letter:String
  },
  mounted () {
    this.scroll =new  BScroll (this.$refs.wrapper)
  },
  watch:{
    letter () {
      if(this.letter) {
        const  elment=this.$refs[this.letter][0];
        console.log(elment)
        this.scroll.scrollToElement(elment)
      }
    }
  }

}
</script>
<style scoped>
.list{
  overflow: hidden;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
.title{
  line-height: 30px;
  background: #eee;
  padding-left: 10px;
  color: #666;
  border-bottom: 1px solid #fff;
  font-size: 14px;
}
.button-list{
  padding: 10px;
  overflow: hidden; 
}
.button-wrapper{
  width: 90px;
  float: left;
}
.button{
  text-align: center;
  padding: 5px 0;
  border:1px  solid #ccc;
  border-radius: 10px;
  margin-left: 5px;
  margin-top: 5px;
}
.item-list .item{
  line-height: 20px;
  color: #666;
  padding-left: 4px;
  border-bottom:1px solid #999
}
</style>
